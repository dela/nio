<?php


include("dbConnection.php");
$query=" SELECT `duration`/60, `date` FROM `hs_hr_nio_attendance` WHERE `emp_id`=2 ";
$result = mysqli_query($nio_conn, $query);

$series = array();

$work = array();
$yettowork = array();
$data = array();

while ($row = mysqli_fetch_array($result)) {
    

}






?>