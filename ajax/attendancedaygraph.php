<?php

include("dbConnection.php");
$dateselected = $_POST['dateselected'];
$number_of_days_in_week = 7;
$minimum_working_hours_in_a_day = 10;
//echo '$dateselected';

$series = array();


$work = array();
$yettowork = array();






$dateselected = strtotime($dateselected);
$i = 0;
for ($i = 0; $i < $number_of_days_in_week; $i++) {

    $dateincremented = date('y-m-d', $dateselected);


    $query = " SELECT * FROM hs_hr_nio_attendance WHERE emp_id=1 AND date='$dateincremented'";
    $result = mysqli_query($nio_conn, $query);
    $row = mysqli_fetch_array($result);
    $work[] = $row['duration'] / 60;
    $yettowork[] = $minimum_working_hours_in_a_day - ($row['duration'] / 60);
    
    $dateselected = ($dateselected + 24 * 3600);
    $day = date("D", $dateselected);
     $dateincremented = date('y-m-d', $dateselected);
}











$series[] = $work;
$series[] = $yettowork;

echo json_encode($series);
?>