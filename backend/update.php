<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS *");
header("Access-Control-Allow-Headers: Content-Type*");

include 'db.php';

$data = json_decode(file_get_contents("php://input"));
$sql = "UPDATE user SET first_name='$data->first_name', middle_name='$data->middle_name', last_name='$data->last_name'
 WHERE id='$data->id'";

$conn->query($sql);

echo json_encode(["message" =>"User updated succesfully"]);

?>