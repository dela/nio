<?php
//This file has the variables that are used to connect to DB

$serverName = "localhost";
$serverUser = "root";
$serverPassword = "";
$databaseHRM = "hr_mysql";
$databaseNIO = "nio_database";

$hrm_conn = mysqli_connect($serverName, $serverUser, $serverPassword, $databaseHRM);
$nio_conn = mysqli_connect($serverName, $serverUser, $serverPassword, $databaseNIO);
?>
