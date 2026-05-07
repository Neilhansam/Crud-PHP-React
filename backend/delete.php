<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS *");
header("Access-Control-Allow-Headers: Content-Type*");

include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$sql = "DELETE FROM user WHERE id=$data->id";
$conn->query($sql);

echo json_encode(["message" => "User deleted successfully"]);
?>