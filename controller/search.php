<?php

require_once('../model/book.php');
	
$title = urldecode($_GET["search"]);

$books = Book::getBooksByTitle($title);

if (empty($books)) {
	http_response_code(400);
} else {
	http_response_code(200);
	header("application/json");
	echo json_encode($books);
}


?>