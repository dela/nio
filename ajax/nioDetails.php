<?php

$nioID=$_POST['nioID'];

$array=array();

include("dbConnection.php");

$query="SELECT * FROM hs_hr_nio WHERE nio_id=$nioID";

$result=  mysqli_query($nio_conn, $query);
$rowNIO= mysqli_fetch_array($result);

$empID= $rowNIO['emp_id'];
$nioRequestID=$rowNIO['nio_request_id'];

$query="SELECT * FROM hs_hr_employee WHERE emp_number=$empID";
$result=  mysqli_query($hrm_conn, $query);
$rowEmployee=  mysqli_fetch_array($result);
$empName = $rowEmployee['emp_firstname'] . " " . $rowEmployee['emp_lastname'];

$query="SELECT * FROM hs_hr_nio_request WHERE nio_request_id=$nioRequestID";
$result=  mysqli_query($nio_conn, $query);
$row=  mysqli_fetch_array($result);
$dateApplied=$row['nio_date_applied'];
$dateApplied=date('d-m-y',strtotime($dateApplied));
$array['genDetails']=array("empID"=>$empID,"empName"=>$empName,"dateApplied"=>$dateApplied,"requestID"=>$nioRequestID);

$jsonData=$array;
echo json_encode($jsonData);
?>
