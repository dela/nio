<?php

$flip = $_POST['flip'];

include_once('dbConnection.php');

$query = "SELECT COUNT(*) FROM hs_hr_nio WHERE nio_status=0";
$result = mysqli_query($nio_conn, $query);
$row = mysqli_fetch_array($result);

$array = array();
$array[] = array('nioCount' => $row[0]);
$jsonData = $array;
echo json_encode($jsonData);
?>
