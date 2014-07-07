\<?php

include("dbConnection.php");
$yearselected= $_POST['yearselected'];
$minimum_working_hours_in_a_week = 40;
$minimum_working_hours_in_a_month = 160;
$series = array();
$work = array();
$yettowork = array();
$month = array();

$yearselected = strtotime($yearselected);
$i = 0;
for ($i = 0; $i < 12; $i++) {

    $yearincremented = date('Y-m-d', $yearselected);
   // $query = " SELECT * FROM hs_hr_nio_attendance WHERE emp_id=1 AND date='$weekincremented'";
    $result = mysqli_query($nio_conn, $query);
    $row = mysqli_fetch_array($result);
    $work[] = $row['duration'] / 60;
    $yettowork[] =$minimum_working_hours_in_a_month  - ($row['duration'] / 60);
       $day[] = date("d M Y-D", $yearselected);
    $yearselected = ($wwekselected + 7*24 * 3600);
    $yearincremented = date('y-m-d', $yearselected);
}

$series[] = $work;
$series[] = $yettowork;
$series[] = $month;
echo json_encode($series);

?>

