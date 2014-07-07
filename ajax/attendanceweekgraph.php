<?php

include("dbConnection.php");
$weekselected= $_POST['weekselected'];
$minimum_working_hours_in_a_week = 40;
$series = array();
$work = array();
$yettowork = array();
$week = array();

$weekselected = strtotime($weekselected);
$i = 0;
for ($i = 0; $i < 4; $i++) {

    $weekincremented = date('Y-m-d', $weekselected);
   // $query = " SELECT * FROM hs_hr_nio_attendance WHERE emp_id=1 AND date='$weekincremented'";
    $result = mysqli_query($nio_conn, $query);
    $row = mysqli_fetch_array($result);
    $work_inweek[] = $row['duration'] / 60;
    $yettowork_inweek[] = $minimum_working_hours_in_a_week - ($row['duration'] / 60);
       $day[] = date("d M Y-D", $weekselected);
    $weekselected = ($weekselected + 7*24 * 3600);
    $weekincremented = date('y-m-d', $weekselected);
}

$series[] = $work;
$series[] = $yettowork;
$series[] = $week;
echo json_encode($series);

?>
