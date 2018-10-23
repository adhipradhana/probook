function saveChange() {
	var profilePicture = document.getElementById("input-update").value;
	var name = document.getElementById("name").value;
	var address = document.getElementById("address").value;
	var phoneNumber = document.getElementById("phone_number").value;

	var body = {};
	if (name) {
		body["name"] = name;
	}
	if (profilePicture) {
		body["profile_pic"] = profilePicture;
	}
	if (address) {
		body["address"] = address;
	}
	if (phoneNumber) {
		body["phone_num"] = phoneNumber;
	}

	if (isEmpty(body)) {
		alert("empty");
	} else {
		var requestBody = JSON.stringify(body);
		var xhttp = new XMLHttpRequest();

		xhttp.open("POST","../controller/edit_profile.php", true);
		xhttp.setRequestHeader("Content-type", "application/json");
		xhttp.send(requestBody);

		xhttp.onreadystatechange = function() {
			if (this.readyState === 4) {
				if (this.status === 200) {
					alert("OK");
					console.log(this.responseText);
				} else {
					alert("NOT OK");
				}
			}
		}
	}

}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
