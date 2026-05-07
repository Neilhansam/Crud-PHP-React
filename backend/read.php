<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


include 'db.php';

$result = $conn->query("SELECT * FROM user");
$data = array();
while ($row = $result->fetch_assoc()){
    $data[] = $row;
}
echo json_encode($data);
?>