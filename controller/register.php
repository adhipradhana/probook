<?php 
	require_once('../model/user.php');

	// Handle post request
	$inputJSON = file_get_contents('php://input');
	$input = json_decode($inputJSON, TRUE);

	$user = User::createUser($input);

	if (is_null($user)) {
		http_response_code(401);
	} else {
		header("application/json");
		http_response_code(200);
		echo json_encode($user);
	}
?>