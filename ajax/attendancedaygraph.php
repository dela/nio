<?php

include("dbConnection.php");
$dateselected = $_POST['dateselected'];
$number_of_days_in_week = 7;
$minimum_working_hours_in_a_day = 10;
//echo '$dateselected';
$query = " SELECT * FROM hs_hr_nio_attendance WHERE emp_id=1 AND date='$dateselected'";
$result = mysqli_query($nio_conn, $query);

$series = array();


$work = array();
$yettowork = array();

while ($row = mysqli_fetch_array($result)) {
    $dateindateform1 = strtotime($dateselected);




    $i = 0;
    for ($i = 0; $i < $number_of_days_in_week; $i++) {
        $dateindateform = strtotime($dateselected . ' + 1 day');
        $day = date("D", $dateindateform);
        $queryeach = " SELECT * FROM hs_hr_nio_attendance WHERE emp_id=1 AND date='$dateindateform'";
        $result_each = mysqli_query($nio_conn, $query);
        while ($row_each = mysqli_fetch_array($result_each)) {

            $work[] = $row['duration'] / 60;
            $yettowork[] = $minimum_working_hours_in_a_day - ($row['duration'] / 60);
        }
    }











    $series[] = $work;
    $series[] = $yettowork;

    echo json_encode($series);
}
?>