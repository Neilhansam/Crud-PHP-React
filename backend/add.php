<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php';

$data = json_decode(file_get_contents("php://input"));

if (empty($data->first_name) || empty($data->middle_name) || empty($data->last_name)) {
    echo json_encode(["error" => "All fields are required"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO user (first_name, middle_name, last_name) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $data->first_name, $data->middle_name, $data->last_name);

if ($stmt->execute()) {
    echo json_encode(["message" => "User added successfully"]);
} else {
    echo json_encode(["error" => "Failed to add user"]);
}

$stmt->close();
$conn->close();
?>