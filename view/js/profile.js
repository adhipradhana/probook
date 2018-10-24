function loadUserData() {
	var id = getCookie("id");

	if (!id) {
		window.location.href = "/view/login.php";
	}

	xhttp = new XMLHttpRequest();
	xhttp.open("GET", "/controller/user_id.php", true);
	xhttp.send();

	xhttp.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				// decode response
				var response = JSON.parse(this.responseText);

				// get html element
				var user = document.getElementById("user");
				var name = document.getElementsByClassName("name")[0];
				var username = document.getElementById("username");
				var email = document.getElementById("email");
				var address = document.getElementById("address");
				var phoneNumber = document.getElementById("phone-number");
				var profilePicture = document.getElementsByClassName("pic-border")[0];
				
				user.textContent = 'Hi, ' + response["username"];
				name.textContent = response["name"];
				username.textContent = '@' + response["username"];
				email.textContent = response["email"];
				address.textContent = response["address"];
				phoneNumber.textContent = response["phone_num"];

				profilePicture.style.background = 'url(\"' + response["profile_pic"] + '\")';
				profilePicture.style.backgroundSize = "cover";
				profilePicture.style.backgroundPosition = "center";

			} else {
				window.location.href = "/view/login.php";
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