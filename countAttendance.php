<?php

$serverName = "localhost";
$serverUser = "root";
$serverPassword = "";
$databaseHRM = "hr_mysql";
$databaseNIO = "nio_database";

$hrm_conn = mysqli_connect($serverName, $serverUser, $serverPassword, $databaseHRM);
$nio_conn = mysqli_connect($serverName, $serverUser, $serverPassword, $databaseNIO);


 echo "  <form action='#' method='POST'>  
            <input type='date' name='date'/>
            <input type='submit'/>
        </form>";

 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
$date = $_POST['date'];

//$query = "SELECT CONVERT (DATE, GETDATE()) 'Date Part Only'";

$query="SELECT emp_number FROM hs_hr_employee";

$resultEmployee=  mysqli_query($hrm_conn, $query);

while($rowEmployee=  mysqli_fetch_array($resultEmployee)){
    $query="SELECT * FROM hs_hr_attendance WHERE date(punchin_time)='$date' AND employee_id='$rowEmployee[0]'";
    $resultAttendance=mysqli_query($hrm_conn, $query);
    $min=0;
    while($rowAttendance=mysqli_fetch_array($resultAttendance)){
        $min+=strtotime($rowAttendance['punchout_time'])-strtotime($rowAttendance['punchin_time']);
    }
    $min=$min/60;
    echo $rowEmployee[0].$date.$min;
    $query="INSERT INTO hs_hr_attendance_nio (emp_id,date,duration) VALUES ('$rowEmployee[0]','$date','$min')";
    $resultFlag=  mysqli_query($nio_conn,$query);
}
}
?>