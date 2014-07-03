<?php

include("dbConnection.php");
$dateselected = $_POST['dateselected'];
$number_of_days_in_week = 7;
$minimum_working_hours_in_a_day = 10;









$series[] = $work;
$series[] = $yettowork;

echo json_encode($series);
?>