<?php

$host     = "localhost";
$db_name  = "crud_system";
$username = "root";
$password = "";

$conn = new mysqli($host, $db_name, $username, $password);
if(conn->connect_error){
    die("connection failed:" . $conn->error);
}
?>