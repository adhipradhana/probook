<?php 
	
	$inputJSON = file_get_contents('php://input');
	$input = json_decode($inputJSON, TRUE);

	header("application/json");
	echo json_encode($input);

?>