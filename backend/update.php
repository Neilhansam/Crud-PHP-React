<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php';

$data = json_decode(file_get_contents("php://input"));


$stmt = $conn->prepare("UPDATE user SET first_name=?, middle_name=?, last_name=?, email=? WHERE id=?");
$stmt->bind_param("ssssi", $data->first_name, $data->middle_name, $data->last_name, $data->email, $data->id);

if ($stmt->execute()) {
    echo json_encode(["message" => "User updated successfully"]);
} else {
    echo json_encode(["error" => "Failed to update user"]);
}

$stmt->close();
$conn->close();
?>