<?php  

class Database {
    function establishConnection($servername, $dbname, $username, $password) {
        try {
            $dsn = "mysql:host=$servername;dbname=$dbname";
            $conn = new PDO($dsn, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "Connected successfully";
            return $conn
        }
        catch (PDOException $p) {
            echo "Connection failed " . $e->getMessage();
        }
    }
}

?>