<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$stmt = $conn->prepare("DELETE FROM user WHERE id=?");
$stmt->bind_param("i", $data->id);

if ($stmt->execute()) {
    echo json_encode(["message" => "User deleted successfully"]);
} else {
    echo json_encode(["error" => "Failed to delete user"]);
}

$stmt->close();
$conn->close();
?>