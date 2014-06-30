<?php

session_start();
$abcd= $_POST['startdate'];
$_SESSION['startdate']=$_POST['startdate'];
$_SESSION['enddate']=$_POST['enddate'];
?>
