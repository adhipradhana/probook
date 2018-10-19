function logIn() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var body = {
		username : username,
		password : password
	};
	var requestBody = JSON.stringify(body);

	var xhttp = new XMLHttpRequest();

	xhttp.open("POST", "../controller/login.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(requestBody);

	xhttp.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (status === 200) {
				alert("OK");
			} else {
				alert("NOT OK");
			}
		}
	}
}