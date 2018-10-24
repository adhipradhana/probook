<?php

require_once('../model/book.php');

// Handle post request
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);

$result = Book::getBookById($input["book_id"]);

if (empty($result)) {
	http_response_code(401);
} else {
	header("application/json");
	http_response_code(200);
	echo json_encode($result);
}

?>
