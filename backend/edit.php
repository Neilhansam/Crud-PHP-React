<?php
include 'db.php';

$id = $_GET['id'];

$result = $conn->query("SELECT * FROM users WHERE id=$id");
$row = $result->fetch_assoc();
?>