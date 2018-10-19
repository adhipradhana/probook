<?php
	// Handle post request
	$inputJSON = file_get_contents('php://input');
	$input = json_decode($inputJSON, TRUE); //convert JSON into array

	header("application/json");
	echo json_encode($input);
?>