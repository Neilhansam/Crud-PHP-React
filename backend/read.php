<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS *");
header("Access-Control-Allow-Headers: Content-Type*");
header("Content-Type: application/json");

include 'db.php';

$result = $conn->query("SELECT * FROM Crud-PHP-React");
$data = array();
while ($row = $result->fetch_assoc()){
    $data[] = $row;
}
echo jscon_encode($data);
?>