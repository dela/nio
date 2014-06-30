<?php

$numberOfElements=8;
$page=$_POST['page'];

$fetch=($page-1)*$numberOfElements;
include("dbConnection.php");
$query="SELECT * FROM hs_hr_nio_employee LIMIT $fetch,$numberOfElements";
$result=  mysqli_query($nio_conn, $query);
$series=array();
$nioApplied=array();
$nioAccepted=array();
$data=array();
while($row=  mysqli_fetch_array($result)){
    $data[]=$row['emp_id'];
    $nioApplied[]=$row['nio_applied_count'];
    $nioAccepted[]=$row['nio_accepted_count'];
}
$series[]=$nioApplied;
$series[]=$nioAccepted;

$series[]=$data;

echo json_encode($series);

?>
