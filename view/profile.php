<!DOCTYPE html>
<html>
<head>
	<title>Profile</title>
	<link rel="stylesheet" type="text/css" href="css/profile.css">
	<link href="https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i&amp;subset=latin-ext" rel="stylesheet">
</head>
<body onload="loadUserData()">
	<div class="header">
		<span id="pro">Pro-</span><span id="book">Book</span> 
		<span class="header2"> 
			<span id="user">Hi, username</span> <span id="logicon"> icon log</span> 
		</span>
	</div>
	<div class="main-section">
		<a href="http://localhost:8080/view/search.php"><div class="browse"><strong class="font2em">B</strong>rowse</div></a>
		<a href="#"><div class="history"><strong class="font2em">H</strong>istory</div></a> 
		<a href="http://localhost:8080/view/profile.php"><div class="profile"><strong class="font2em">P</strong>rofile</div></a>
	</div>
	<div class="profile-pic">
		<a href="http://localhost:8080/view/edit_profile.php"><span class="edit-pic">EDIT ICON</span></a>
		<div class="pic-border"></div>
		<div class="name"> Tayo the little bus </div>
	</div>
	<div class="user-profile">
		<span id="my-profile">My Profile</span>
		<table class="table-profile">
			<tr>
				<td class="width-35">Username</td>	
				<td id="username" class="width-65">@tayotayo</td>	
			</tr>
			<tr>
				<td class="width-35">Email</td>	
				<td id="email" class="width-65">tayo@littlebus.com</td>	
			</tr>
			<tr>
				<td class="width-35">Address</td>	
				<td id="address" class="width-65">120 Garage Street, Unit B. Korea.</td>	
			</tr>
			<tr>
				<td class="width-35">Phone Number</td>	
				<td id="phone-number" class="width-65">081234567890</td>	
			</tr>
		</table>
	</div>
	<script type="text/javascript" src="js/profile.js"></script>
</body>
</html>
