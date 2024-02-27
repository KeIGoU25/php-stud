<?php
include_once('config.php');

// Handle GET request to fetch student data
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Check if primary_id parameter is provided
    if (isset($_GET['primary_id'])) {
        $primaryId = $_GET['primary_id'];

        // Perform SQL select to fetch student data based on primary_id
        $sql = "SELECT * FROM tblStudents WHERE id = $primaryId";
        $result = mysqli_query($conn, $sql);

        // Check if any row is returned
        if (mysqli_num_rows($result) > 0) {
            // Fetch student data
            $student = mysqli_fetch_assoc($result);
            // Encode student data as JSON and send response
            echo json_encode($student);
        } else {
            // If no student found with provided primary_id
            echo json_encode(array("error" => "No student found with provided ID"));
        }
    } else {
        // If primary_id parameter is not provided
        echo json_encode(array("error" => "No ID provided"));
    }
} else {
    // If request method is not GET
    echo json_encode(array("error" => "Invalid request method"));
}
