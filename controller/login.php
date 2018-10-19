<?php
	// Handle post request
	$inputJSON = file_get_contents('php://input');
	$input = json_decode($inputJSON, TRUE); //convert JSON into array

    require 'userdb.php';

	header("application/json");
	$output = UserDB::getUserLogin($input['username'], $input['password']);
    echo json_encode(get_object_vars($output));
?>