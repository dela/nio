<?php
include('dbConnection.php');

$year=2014;
$leave=0;
$nioApplied=0;
$nioAccepted=0;
$query="SELECT * FROM hs_hr_employee";
$result=  mysqli_query($hrm_conn, $query);

while($employee=  mysqli_fetch_array($result)){
     $empID=$employee['emp_number'];
     $query="SELECT * FROM hs_hr_nio_employee WHERE emp_id='$empID' and year='$year'";
     $stat=  mysqli_query($nio_conn, $query);
     if(mysqli_num_rows($stat)){
         $query="SELECT COUNT(*) FROM hs_hr_nio WHERE emp_id='$empID'";
         $stat=  mysqli_query($nio_conn, $query);
         $stat=  mysqli_fetch_array($stat);
         $nioApplied=$stat[0];
         $query="SELECT COUNT(*) FROM hs_hr_nio WHERE emp_id='$empID' and nio_status=1";
         $stat=  mysqli_query($nio_conn, $query);
         $stat=  mysqli_fetch_array($stat);
         $nioAccepted=$stat[0];
         $query="UPDATE hs_hr_nio_employee
                SET nio_applied_count='$nioApplied',nio_accepted_count='$nioAccepted'
                WHERE emp_id='$empID'";
          $stat=  mysqli_query($nio_conn, $query);
     }
     else{
         $query="INSERT INTO hs_hr_nio_employee 
             (emp_id,leave_count,nio_applied_count,nio_accepted_count,nio_status,year) 
             VALUES
             ('$empID','$leave','$nioApplied','$nioAccepted',1,'$year')";
         $insert=  mysqli_query($nio_conn, $query);
     }
}

?>
