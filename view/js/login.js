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
			if (this.status === 200) {
				alert("OK");
				console.log(this.responseText);
			} else {
				alert("NOT OK");
			}
		}
	}
}