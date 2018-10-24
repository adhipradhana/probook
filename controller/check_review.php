<?php

require_once('../model/review.php');

// Handle post request
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

$result = Review::checkReview($input);

if (!$result) {
	http_response_code(401);
} else {
	http_response_code(200);
}

?>
