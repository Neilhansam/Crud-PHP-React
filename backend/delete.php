<?php
require 'db.php';
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$stmt = $pdo->prepare("DELETE FROM persons WHERE id=?");
$stmt->execute([$data['id']]);

echo json_encode(["message" => "Person deleted successfully"]);
?>