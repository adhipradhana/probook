<?php  

require_once('../model/database.php');

class Book {
    static function getBookById($id) {
        try {
            $conn = Database::establishConnection();

            if ($conn != NULL) {
                $statement = $conn->prepare('SELECT * FROM books WHERE id = ?');
                $statement->execute([$id]);
                $book = $statement->fetch(PDO::FETCH_ASSOC);

                $conn = NULL;
                $statement = NULL;
            }

            return $book;
        } catch (PDOException $e) {
            return NULL;
        }
    }

    static function getBooksByTitle($title) {
        try {
            $conn = Database::establishConnection();

            if ($conn != NULL) {
                $statement = $conn->prepare('SELECT * FROM books WHERE LOWER(books.title) LIKE \'%?%\'');
                $statement->execute([$id]);
                $books = $statement->fetchAll(PDO::FETCH_ASSOC);

                $conn = NULL;
                $statement = NULL;
            }

            return $books;
        } catch (PDOException $e) {
            return NULL;
        }
    }

    static function createBook($data) {
        try {
            $conn = Database::establishConnection();

            if ($conn != NULL) {
                $statement = $conn->prepare('INSERT INTO books(title, synopsis, author, avg_rating) VALUES(?,?,?,?,?)');
                $statement->execute([$data["title"], $data["synopsis"], $data["author"], 0]);

                $conn = NULL;
                $statement = NULL;

                return TRUE;
            }

            return FALSE;
        } catch (PDOException $e) {
            return FALSE;
        }
    }

    static function deleteBook($id) {
        try {
            $conn = Database::establishConnection();

            if ($conn != NULL) {
                $statement = $conn->prepare('DELETE FROM books WHERE id = ?');
                $statement->execute([$id]);

                $conn = NULL;
                $statement = NULL;

                return TRUE;
            }

            return FALSE;
        } catch (PDOException $e) {
            return FALSE;
        }
    }

    // TODO : update book rating
    // function static updateBookRating($rating) {
    //  try {
    //      $conn = Database::establishConnection();

    //      if ($conn != NULL) {
    //          $statement = $conn->prepare('UPDATE SET rating ')
    //      }

    //      return FALSE;
    //  } catch (PDOException $e) {
    //      return FALSE;
    //  }
    // }
}


?>