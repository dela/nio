<?php

$attID=$_POST['attID'];

$array=array();

include("dbConnection.php");

$query="SELECT * FROM hs_hr_nio_attendance WHERE att_id=$attID";

$result=  mysqli_query($nio_conn, $query);
$row= mysqli_fetch_array($result);

$empID= $row['emp_id'];
$date=$row['date'];
$date=date('D,M d,Y',strtotime($date));

$query="SELECT * FROM hs_hr_employee WHERE emp_number=$empID";
$result=  mysqli_query($hrm_conn, $query);
$rowEmployee=  mysqli_fetch_array($result);
$empName = $rowEmployee['emp_firstname'] . " " . $rowEmployee['emp_lastname'];


$array['genDetails']=array("empID"=>$empID,"empName"=>$empName,'date'=>$date);



$jsonData=$array;
echo json_encode($jsonData);
?>
