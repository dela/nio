<?php


include("dbConnection.php");
$dateselected=$_POST['dateselected'];
//echo '$dateselected';
$query=" SELECT `duration`, `date` FROM `hs_hr_nio_attendance` WHERE `emp_id`=1 ";
$result = mysqli_query($nio_conn, $query);

$series = array();

$work = array();
$yettowork = array();
$data = array();

while ($row = mysqli_fetch_array($result)) {
    
$dateindateform=  strtotime($dateselected);
$day=date("D",$dateindateform);
$workedout= $row['duration']/60;
$yettowork= 8 - $workedout;

}






?>