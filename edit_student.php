<?php
include_once('config.php');

// Handle POST request to update student data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve POST data
    $primaryId = $_POST['primary_id'];
    $studNumber = $_POST['studNumber'];
    $name = $_POST['name'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];

    // Perform SQL update
    $sql = "UPDATE tblStudents SET studNumber=$studNumber, name='$name', age=$age, email='$email', contact='$contact' WHERE id=$primaryId";
    if (mysqli_query($conn, $sql)) {
        echo "Student updated successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
