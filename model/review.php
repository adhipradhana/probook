<?php  

require_once('database.php');

class Review {
    
    public static function getReviewByTitle($title){
    	try {
	        $conn = Database::establishConnection();
	        if ($conn != NULL) {
	            $stmt = $conn -> prepare('SELECT `users.username`, `reviews.id`, `books.title`, `reviews.message`, `reviews.rating` FROM reviews JOIN users ON `reviews.user_id` = `users.id` JOIN books ON `reviews.books_id` = `books.id` WHERE `books.title` = ?');
	            $stmt -> execute([$title]);
	            $review = $stmt->fetchAll(PDO::FETCH_ASSOC);

	            $stmt = NULL;
	            $conn = NULL;
	        }

        	return $review;
	     } catch (PDOException $e) {
	     	return NULL;
	     }
    }

    public static function createReview($data) {
    	try {
	    	$conn = Database::establishConnection();
	    	if ($conn != NULL) {
	    		$date = new DateTime();
				$date->format('Y-m-d H:i:s');
				$stmt = $conn -> prepare('INSERT INTO reviews(books_id, user_id, message, rating, timestamps) VALUES(?,?,?,?,?)');
		        $stmt -> execute([$data["books_id"], $data["user_id"], $data["message"], $data["rating"], $date);
		        
		        $stmt = $conn -> prepare('SELECT * FROM reviews WHERE id = LAST_INSERT_ID()');
		        $stmt -> execute();
		        $review = $stmt->fetch(PDO::FETCH_ASSOC);

		        $stmt = NULL;
	            $conn = NULL;
		    }

    		return $review;
		} catch (PDOException $e) {
			return NULL;
		}  
    }

    public static function updateReview($data) {
    	try {
    		$conn = Database::establishConnection();
    		if ($conn != NULL) {
   	    		$date = new DateTime();
				$date->format('Y-m-d H:i:s');
    			$stmt = $conn -> prepare('UPDATE reviews SET books_id = ?, user_id = ?, message = ?, rating = ?, timestamps = ? WHERE id = ?');
		        $stmt -> execute([$data["books_id"], $data["user_id"], $data["message"], 
		        	$data["rating"], $date);

		        $stmt = NULL;
	            $conn = NULL;

	            return TRUE;
    		}

    		return FALSE;
    	} catch (PDOException $e) {
    		return FALSE;
    	}
    }

    public static function deleteUser($id) {
    	try {
    		$conn = Database::establishConnection();
    		if ($conn != NULL) {
    			$stmt = $conn -> prepare('DELETE FROM reviews WHERE id = ?');
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