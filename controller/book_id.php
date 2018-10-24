<?php

require_once('../model/book.php');

$id = $_GET['id'];

if (empty($id)) {
    http_response_code(404);
}
else {
    $book = Book::getBookById($id);
    if (empty($book)) {
        http_response_code(404);
    }
    else {
        http_response_code(200);
        header("application/json");
        echo json_encode($book);
    }
}

?>
