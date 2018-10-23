<?php

require_once('../model/user.php');

$id = $_COOKIE["id"];

$user = User::getUserById($id);

if (empty($user)) {
	http_response_code(401);
} else {
	http_response_code(200);
	header("application/json");
	echo json_encode($user);
}

?>