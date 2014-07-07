<?php

include 'dbConnection.php';

$query = "SELECT * FROM hs_hr_employee";
$result = mysqli_query($hrm_conn, $query);

$empNames=array();
$takenLeave=array();
$total=array();

while ($row = mysqli_fetch_array($result)) {
    $empID=$row['emp_number'];
    $query = "SELECT * FROM hs_hr_employee_leave_quota WHERE employee_id=$empID";
    $leave = mysqli_query($hrm_conn, $query);
    $totalNumber=0;
    $taken=0;
    while ($rowLeave = mysqli_fetch_array($leave)) {
        $totalNumber+=$rowLeave['no_of_days_allotted'];
        $taken+=$rowLeave['leave_taken'];
    }
    $empNames[]=$row['emp_firstname']+" "+$row['emp_lastname'];
    $takenLeave[]=$taken;
    $total[]=$totalNumber;
}

$jsonData=array();
$jsonData[]=$empNames;
$jsonData[]=$taken;
$jsonData[]=$total;

json_encode($jsonData);
?>
