function logIn() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var body = {
		username : username,
		password : password
	};
	var requestBody = JSON.stringify(body);

	var xhttp = new XMLHttpRequest();

	xhttp.open("POST", "../controller/login.php", false);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(requestBody);

	console.log(xhttp.responseText);
}