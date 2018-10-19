<?php
	// Handle post request
	$inputJSON = file_get_contents('php://input');
	$input = json_decode($inputJSON, TRUE); //convert JSON into array

    require 'userdb.php';

	$output = UserDB::getUserLogin($input['username'], $input['password']);

	if (is_null($output)) {
		http_response_code(401);
	} else {
		header("application/json");
		http_response_code(200);
		echo json_encode(get_object_vars($output));
	}
?>