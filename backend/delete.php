<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$sql = "DELETE FROM crud_system WHERE id=$data->id";
$conn->query($sql);

echo json_encode(["message" => "User deleted successfully"]);
?>