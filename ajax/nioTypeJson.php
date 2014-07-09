<?php

include 'dbConnection.php';

$employeeData=array();
$designationData=array();

$query="SELECT * FROM hs_hr_employee";
$result=  mysqli_query($hrm_conn, $query);
while($row=  mysqli_fetch_array($result)){
    $name=$row['emp_firstname']." ".$row['emp_lastname'];
    $empID=$row['emp_number'];
    $employeeData[]=array('label'=>$name,'value'=>$empID);
}

$query="SELECT * FROM hs_hr_job_title";
$result=  mysqli_query($hrm_conn, $query);
while($row=  mysqli_fetch_array($result)){
    $id=$row['jobtit_code'];
    $name=$row['jobtit_name'];
    $designationData[]=array('label'=>$name,'value'=>$id);
}

$jsonData=array();
$jsonData['empName']=$employeeData;
$jsonData['designations']=$designationData;

echo json_encode($jsonData);
?>
