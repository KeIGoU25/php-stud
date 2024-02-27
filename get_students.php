<?php
include_once('config.php');

// Perform SQL select to fetch student data
$sql = "SELECT id, studNumber, name, age, email, contact FROM tblStudents ORDER BY id ASC";
$result = mysqli_query($conn, $sql);
$students = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $students[] = $row;
    }
}

// Convert data to JSON and send response
echo json_encode($students);
