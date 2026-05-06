<?php
include 'db.php';

if(isset($_POST['update'])){
    $id = $_POST['id'];
    $first = $_POST['first_name'];
    $middle = $_POST['middle_name'];
    $last = $_POST['last_name'];

    $sql = "UPDATE users SET 
            first_name='$first',
            middle_name='$middle',
            last_name='$last'
            WHERE id=$id";

    if($conn->query($sql)){
        header("Location: index.php");
    } else {
        echo "Error: " . $conn->error;
    }
}
?>