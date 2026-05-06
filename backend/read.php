<?php
require 'db.php';
header("Content-Type: application/json");

$stmt = $pdo->query("SELECT * FROM persons ORDER BY created_at DESC");
$persons = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($persons);
?>