<?php

$nioID=$_POST['nioID'];

$array=array();

include("dbConnection.php");

$query="SELECT * FROM hs_hr_nio WHERE nio_id=$nioID";

$result=  mysqli_query($nio_conn, $query);
$rowNIO= mysqli_fetch_array($result);

$empID= $rowNIO['employee_id'];

$query="SELECT * FROM hs_hr_employee WHERE emp_number=$empID";
$result=  mysqli_query($hrm_conn, $query);
$rowEmployee=  mysqli_fetch_array($result);
$empName = $rowEmployee['emp_firstname'] . " " . $rowEmployee['emp_lastname'];

$query="SELECT MAX(nio_request_id) FROM hs_hr_nio_request WHERE nio_id=$nioID";
$result=  mysqli_query($nio_conn, $query);
$row=  mysqli_fetch_array($result);
$nioRequestID=$row[0];

$query="SELECT * FROM hs_hr_nio_request WHERE nio_request_id=$nioRequestID";
$result=  mysqli_query($nio_conn, $query);
$row=  mysqli_fetch_array($result);
$dateApplied=$row['date_applied'];

$array['genDetails']=array("empID"=>$empID,"empName"=>$empName,"dateApplied"=>$dateApplied);

$jsonData=$array;
echo json_encode($jsonData);
?>
