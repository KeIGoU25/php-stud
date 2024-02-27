<?php
include_once('config.php');

// Handle POST request to save student data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve POST data
    $studNumber = $_POST['studNumber'];
    $name = $_POST['name'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];

    // Perform SQL insert
    $sql = "INSERT INTO tblStudents (studNumber, name, age, email, contact) VALUES ($studNumber, '$name', $age, '$email', '$contact')";
    if (mysqli_query($conn, $sql)) {
        echo "Student added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
