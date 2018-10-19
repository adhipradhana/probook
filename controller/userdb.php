<?php 

class UserDB {
    function getUserLogin($username, $password) {
        require_once '../model/Database.php';
        require_once '../model/user.php';
        $conn = Database::establishConnection('127.0.0.1', 'probook', 'root', '');
        if ($conn != NULL) {
            $stmt = $conn -> prepare('SELECT * FROM users WHERE username = ? AND password = ?');
            $stmt -> execute([$username, $password]);
            $user = $stmt -> fetchObject('User');

            $stmt = null;
            $conn = null;
        }

        return $user;
    }
}

 ?>