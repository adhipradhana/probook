<!DOCTYPE html>
<html>
<head>
	<title>Edit Profile</title>
	<link rel="stylesheet" type="text/css" href="/view/css/edit_profile.css">
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
		<a href="#"><div class="browse"><strong class="font2em">B</strong>rowse</div></a>
		<a href="#"><div class="history"><strong class="font2em">H</strong>istory</div></a> 
		<a href="#"><div class="profile"><strong class="font2em">P</strong>rofile</div></a>
	</div>
	<div id="edit-profile">Edit Profile</div>
	 
	<div id="profile-pic"> </div>
	<div id="browse-img">
		<div class="text-update"><span>Update profile picture</span></div>
		<div class="height-50"><input type="text" name="profile-pic" id="input-update"><button type="submit" id="browse-update">Browse..</button></div>
	</div>
	<div class="container">
		<table class="table-profile">
			<tr>
				<td class="width-200">Name</td>
				<td class="width-81"><input type="text" id="name"></td>
			</tr>
			<tr>
				<td class="width-200">Address</td>
				<td class="width-81"><textarea id="address" rows="3"></textarea></td>
			</tr>
			<tr>
				<td class="width-200">Phone Number</td>
				<td class="width-81"><input type="text" id="phone_number" onkeyup="validatePhoneNumber()"></td>
			</tr>
		</table>
	</div>
	<div class="button-container">
		<a href="/view/profile.php"><button id="back-button">Back</button></a>
		<button id="save-button" onclick="saveChange()">Save</button>
	</div>
	<script type="text/javascript" src="/view/js/edit_profile.js"></script>
</body>