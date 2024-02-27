<?php
// Include your database connection file
include_once('config.php');

// Check if the request is POST and if the ID is set
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['id'])) {
    $studentId = $_POST['id'];

    // Prepare and execute the SQL query to delete the student
    $sql = "DELETE FROM tblStudents WHERE id = $studentId";
    $result = mysqli_query($conn, $sql);
    $conn->close();
} else {
    echo "Invalid request.";
}
