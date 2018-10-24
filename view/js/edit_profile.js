function loadUserData() {
	var id = getCookie("id");

	if (!id) {
		window.location.href = "http://localhost:8080/view/login.php";
	}

	xhttp = new XMLHttpRequest();
	xhttp.open("GET", "../controller/user_id.php", true);
	xhttp.send();

	xhttp.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				// decode response
				var response = JSON.parse(this.responseText);

				// get html element
				var profilePicture = document.getElementById("profile-pic");
				var name = document.getElementById("name");
				var address = document.getElementById("address");
				var phoneNumber = document.getElementById("phone_number");
				var username = document.getElementById("user");

				username.textContent = 'Hi, ' + response["username"];
				name.value = response["name"];
				address.value = response["address"];
				phoneNumber.value = response["phone_num"];
				profilePicture.style.background = 'url(\"' + response["profile_pic"] + '\")';
				profilePicture.style.backgroundSize = "cover";
				profilePicture.style.backgroundPosition = "center";
			} else {
				window.location.href = "http://localhost:8080/view/login.php";
			}
		}
	}
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getImageURL(imageURL) {
	firstIndex = imageURL.indexOf('\"');
	secondIndex = imageURL.indexOf('\"', firstIndex + 1);

	return imageURL.slice(firstIndex + 1,secondIndex);
}

function isPhoneNumberValid(phoneNumber) {
	return phoneNumber.length >= 9 && phoneNumber.length <= 12;
}

function isFieldValid(name, address, phoneNumber) {
	return isPhoneNumberValid(phoneNumber) && address.length > 0 && name.length > 0;
}

function validatePhoneNumber(){
	var phoneNumber = document.getElementById("phone_number").value;
	var phoneNumberField = document.getElementById("phone_number");

	if (isPhoneNumberValid(phoneNumber)) {
		phoneNumberField.style.background = "#FFFFFF";
	} else {
		phoneNumberField.style.background = "#f44262";
	}

	if (phoneNumber.length === 0) {
		phoneNumberField.style.background = "FFFFFF";
	}
}

function saveChange() {
	var profilePicture = document.getElementById("profile-pic").style.background;
	var name = document.getElementById("name").value;
	var address = document.getElementById("address").value;
	var phoneNumber = document.getElementById("phone_number").value;
	var newProfilePicture = document.getElementById("input-update").value;

	var imageURL = getImageURL(profilePicture);

	if (isFieldValid(name, address, phoneNumber)) {
		var body = {
			name : name,
			address : address,
			phone_num : phoneNumber,
		};

		if (newProfilePicture.length > 0) {
			body["profile_pic"] = newProfilePicture;
		} else {
			body["profile_pic"] = imageURL;
		}

		var requestBody = JSON.stringify(body);
		var xhttp = new XMLHttpRequest();

		xhttp.open("POST","../controller/edit_profile.php", true);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send(requestBody);

		xhttp.onreadystatechange = function() {
			if (this.readyState === 4) {
				if (this.status === 200) {
					window.location.href = "http://localhost:8080/view/profile.php";
				} else {
					alert("Can't change profile");
				}
			}
		}
	} else {
		alert("Field not valid");
	}
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
