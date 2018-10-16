<!DOCTYPE html>
<html>
<head>
	<title>Register</title>
	<link rel="stylesheet" type="text/css" href="CSS/register.css">
</head>
<body>
	<div class="background">
		<div class="container">
		<h1> REGISTER </h1>
			<table class="data-registration">
				<form>
					<tr>
						<td class="align-right">Name</td>
						<td><input type="text" name="name"></td>
					</tr>
					<tr>
						<td class="align-right">Username</td>
						<td><input type="text" name="username"></td>
					</tr>
					<tr>
						<td class="align-right">Password</td>
						<td><input type="password" name="password"></td>
					</tr>
					<tr>
						<td class="align-right">Confirm Password</td>
						<td><input type="password" name="confirm-password"></td>
					</tr>
					<tr>
						<td class="align-right">Address</td>
						<td><textarea name="address" row="2"></textarea></td>
					</tr>
					<tr>
						<td class="align-right">Phone Number</td>
						<td><input type="text" name="phone-number"></td>
					</tr>
				</form>
			</table>
			<span id="already"><a href="#">Already have an account?</a></span>
			<div class="button-register">
				<button type="button" id="submit">REGISTER</button>
			</div>
		</div>
	</div>
</body>
</html>