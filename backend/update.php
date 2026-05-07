<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));
$sql = "UPDATE crud_system SET first_name='$data->first_name', middle_name='$data->middle_name', last_name='$data->last_name'
 WHERE id='$data->id'";

$conn->query($sql);

echo json_encode(["message" =>"User updated succesfully"]);

?>