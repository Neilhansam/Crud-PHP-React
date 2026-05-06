<?php
include 'db.php';

if(isset($_POST['submit'])){
    $first = $_POST['first_name'];
    $middle = $_POST['middle_name'];
    $last = $_POST['last_name'];

    $sql = "INSERT INTO users (first_name, middle_name, last_name)
            VALUES ('$first', '$middle', '$last')";

    if($conn->query($sql)){
        echo "Data inserted!";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>