<?php

require_once('../model/order.php');

$id = $_GET['id'];

if (empty($id)) {
    http_response_code(404);
}
else {
    $history = Order::getHistoryByUser($id);
    if (empty($history)) {
        http_response_code(404);
    }
    else {
        http_response_code(200);
        header("application/json");
        echo json_encode($history);
    }
}


?>