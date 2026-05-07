<?php

include 'db.php';

$result = $conn->query("SELECT * FROM crud_system");
$data = array();
while ($row = $result->fetch_assoc()){
    $data[] = $row;
}
echo jscon_encode($data);
?>