function register(){
	var name = document.getElementById("name").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirm_password").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var phoneNumber = document.getElementById("phone_number").value;

	checkDataValid(username, email, password, confirmPassword, phoneNumber, function (valid) {
		if (valid) {
			var body = {
				name : name,
				username : username,
				password : password,
				email : email,
				address : address,
				phone_num : phoneNumber,
				profile_pic : "/view/asset/default.jpg"
			};

			var requestBody = JSON.stringify(body);
			var xhttp = new XMLHttpRequest();

			xhttp.open("POST","../controller/register.php", true);
			xhttp.setRequestHeader("Content-type", "application/json");
			xhttp.send(requestBody);

			xhttp.onreadystatechange = function() {
				if (this.readyState === 4) {
					if (this.status === 200) {
						window.location.href = "http://localhost:8080/view/login.php";
					} else {
						alert("NOT OK");
					}
				}
			}
		} else {
			alert("NOT VALID");
		}
	});

}

function checkDataValid(username, email, password, confirmPassword, phoneNumber, callback) {
	checkUsernameExist(username, function (exist) {
		if (exist) {
			return callback(false);
		}

		checkEmailExist(email, function(exist) {
			if (exist) {
				return callback(false);
			}

			var valid = isPasswordValid(password, confirmPassword) && isPhoneNumberValid(phoneNumber);
			return callback(valid);
		});
	});
}

function isPhoneNumberValid(phoneNumber) {
	return phoneNumber.length >= 9 && phoneNumber.length <= 12;
}

function validatePhoneNumber(){
	var phoneNumber = document.getElementById("phone_number").value;
	var phoneNumberField = document.getElementById("phone_number");

	if (isPhoneNumberValid(phoneNumber)) {
		phoneNumberField.style.background = "#41f471";
	} else {
		phoneNumberField.style.background = "#f44262";
	}

	if (phoneNumber.length === 0) {
		phoneNumberField.style.background = "FFFFFF";
	}
}

function isPasswordValid(password, confirmPassword) {
	return password === confirmPassword;
}

function validatePassword(){
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirm_password").value;
	var confirmPasswordField = document.getElementById("confirm_password");

	if (isPasswordValid(password, confirmPassword)){
		confirmPasswordField.style.background = "#41f471";	
	} else{
		confirmPasswordField.style.background = "#f44262";
	}

	if(confirmPassword.length === 0 && password.length === 0){
		confirmPasswordField.style.background = "#FFFFFF";
	}
}

function isEmailValid(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(email);
} 

function checkEmailExist(email, callback) {
	var body = {
		email : email
	};

	var requestBody = JSON.stringify(body);
	var xhttp = new XMLHttpRequest();

	xhttp.open("POST","../controller/check_email.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(requestBody);

	xhttp.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				return callback(false);
			} else {
				return callback(true);
			}
		}
	}
}

 //reference for this regex: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(){
	var email = document.getElementById("email").value;
	var emailField = document.getElementById("email");

	//TODO: bener -> cek DB
	if (isEmailValid(email)){
		checkEmailExist(email, function(exist) {
			if (!exist) {
				emailField.style.background = "#41f471";
			} else {
				emailField.style.background = "#f44262";
			}
		});
	} else {
		emailField.style.background = "#f44262";
	}

	if(email.length === 0){
		emailField.style.background = "#FFFFFF";
	}	
}

function isUsernameValid(username) {
	var re = /^[a-zA-Z0-9_]*$/;

	return re.test(username) && username.length <= 20;
} 

function checkUsernameExist(username, callback) {
	var body = {
		username : username
	};

	var requestBody = JSON.stringify(body);
	var xhttp = new XMLHttpRequest();

	xhttp.open("POST","../controller/check_username.php", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(requestBody);

	xhttp.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				return callback(false);
			} else {
				return callback(true);
			}
		}
	}
}

function validateUsername(){
	var username = document.getElementById("username").value;
	var usernameField = document.getElementById("username");

	//TODO: bener -> cek DB
	if (isUsernameValid(username)) {
		checkUsernameExist(username, function(exist) {
			if (!exist) {
				usernameField.style.background = "#41f471";
			} else {
				usernameField.style.background = "#f44262";
			}
		});
	} else {
		usernameField.style.background = "#f44262";
	}

	if (username.length === 0){
		usernameField.style.background = "#FFFFFF";
	}	
}