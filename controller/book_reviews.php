<?php

require_once('../model/review.php');

$id = $_GET['id'];

if (empty($id)) {
    http_response_code(404);
}
else {
    $reviews = Review::getReviewByBookId($id);
    if (empty($reviews)) {
        http_response_code(404);
    }
    else {
        http_response_code(200);
        header("application/json");
        echo json_encode($reviews);
    }
}


?>