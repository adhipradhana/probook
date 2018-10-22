function register(){
	var name = document.getElementById("name").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var confirm_password = document.getElementById("confirm_password").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var phone_number = document.getElementById("phone_number").value;

	var body = {
		name : name,
		username : username,
		password : password,
		confirm_password : confirm_password,
		email : email,
		address : address,
		phone_num : phone_number
	};

	var requestBody = JSON.stringify(body);
	var xhttp = new XMLHttpRequest();

	xhttp.open("POST","../controller/register.php", true);
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

function validatePassword(){
	var password = document.getElementById("password").value;
	var confirm_password = document.getElementById("confirm_password").value;
	var input_confirm_password = document.getElementById("confirm_password");

	if(password !== confirm_password){
		input_confirm_password.style.background = "#f44262";
	}else{
		input_confirm_password.style.background = "#41f471";
	}

	if(confirm_password.length === 0 && password.length === 0){
		input_confirm_password.style.background = "#FFFFFF";
	}
}

 //reference for this regex: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(){
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var email = document.getElementById("email").value;
	var input_email = document.getElementById("email");


	//TODO: bener -> cek DB
	if(re.test(email)){
		console.log("benar");
		input_email.style.background = "#41f471";
	}else{
		console.log("salah");
		input_email.style.background = "#f44262";
	}

	if(email.length === 0){
		input_email.style.background = "#FFFFFF";
	}	
}

function validateUsername(){
	var re = /^[a-zA-Z0-9_]*$/;
	var username = document.getElementById("username").value;
	var input_username = document.getElementById("username");


	//TODO: bener -> cek DB
	if(re.test(username)){
		console.log("benar");
		input_username.style.background = "#41f471";
	}else{
		console.log("salah");
		input_username.style.background = "#f44262";
	}

	if(username.length === 0){
		input_username.style.background = "#FFFFFF";
	}	
}