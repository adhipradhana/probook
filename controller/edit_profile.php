<?php
	
require_once('../model/user.php');

// Handle post request
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE); //convert JSON into array

// add id into input assoc
$input["id"] = $_COOKIE["id"];

$result = User::updateUser($input);

if (!result) {
	http_response_code(401);
} else {
	http_response_code(200);
}

?>