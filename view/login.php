<!DOCTYPE html>
<html>
<head>
	<title>Log In</title>
	<link rel="stylesheet" type="text/css" href="/view/css/register.css">
</head>
<body>
	<div class="background">
		<div class="container">
			<h1> LOGIN </h1>
			<table class="data-registration">
				<form>
					<tr>
						<td class="align-right">Username</td>
						<td><input type="text" id="username"></td>
					</tr>
					<tr>
						<td class="align-right">Password</td>
						<td><input type="password" id="password"></td>
					</tr>
				</form>
			</table>
			<span id="already"><a href="http://localhost:8080/view/register.php">Don't have an account?</a></span>
			<div class="button-register">
				<button type="button" id="submit" onclick="logIn()">LOGIN</button>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="/view/js/login.js"></script>
</body>
</html>