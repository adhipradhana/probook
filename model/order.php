<?php  

class Order {
    
    public static function getOrderByID($id) {
        try {
            $conn = Database::establishConnection();
            if ($conn != NULL) {
                $stmt = $conn -> prepare('SELECT * FROM orders WHERE id = ?');
                $stmt -> execute($id);
                $order = $stmt -> fetch(PDO::FETCH_ASSOC);

                $stmt = NULL;
                $conn = NULL;
            }

            return $order;
         } catch (PDOException $e) {
            return NULL;
         }
    }

    public static function createOrder($data) {
        try {
            $conn = Database::establishConnection();
            if ($conn != NULL) {
                $stmt = $conn -> prepare('INSERT INTO orders(user_id, book_id, quantity) VALUES (?,?,?)');
                $stmt -> execute([$data["user_id"], $data["book_id"], $data["quantity"]]);
                
                $stmt = $conn -> prepare('SELECT * FROM orders WHERE id = LAST_INSERT_ID()');
                $stmt -> execute();
                $order = $stmt -> fetch(PDO::FETCH_ASSOC);

                $stmt = NULL;
                $conn = NULL;
            }

            return $order;
        } catch (PDOException $e) {
            return NULL;
        }   
    }

    public static function updateOrder($data) {
        try {
            $conn = Database::establishConnection();
            if ($conn != NULL) {
                $stmt = $conn -> prepare('UPDATE orders SET user_id = ?, book_id = ?, quantity = ? WHERE id = ?');
                $stmt -> execute([$data["user_id"], $data["book_id"], $data["quantity"], $data["id"]]);

                $stmt = NULL;
                $conn = NULL;

                return TRUE;
            }

            return FALSE;
        } catch (PDOException $e) {
            return FALSE;
        }
    }

    public static function deleteOrder($id) {
        try {
            $conn = Database::establishConnection();
            if ($conn != NULL) {
                $stmt = $conn -> prepare('DELETE FROM orders WHERE id = ?');
                $stmt -> execute([$id]);

                $stmt = NULL;
                $conn = NULL;

                return TRUE;
            }

            return FALSE;
        } catch (PDOException $e) {
            return FALSE;
        }
    }

}

?>