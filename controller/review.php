<?php 

require_once('../model/review.php');

//handle post request
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

$input["user_id"] = $_COOKIE["id"];

$review = Review::createReview($input);

if(empty($review)){
	http_response_code(401);
}else{
	header("application/json");
	http_response_code(200);
	echo json_encode($review);
}

?>