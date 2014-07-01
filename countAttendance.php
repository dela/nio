<?php

$minWorkMinutes = 240;        //Minimum working hours is 4 hours

include('dbConnection.php');

echo "  <form action='#' method='POST'>  
            <input type='date' name='date'/>
            <input type='submit'/>
        </form>";


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $date = $_POST['date'];

//$query = "SELECT CONVERT (DATE, GETDATE()) 'Date Part Only'";

    $query = "SELECT emp_number FROM hs_hr_employee";

    $resultEmployee = mysqli_query($hrm_conn, $query);

    while ($rowEmployee = mysqli_fetch_array($resultEmployee)) {
        $query = "SELECT * FROM hs_hr_attendance WHERE date(punchin_time)='$date' AND employee_id='$rowEmployee[0]'";
        $resultAttendance = mysqli_query($hrm_conn, $query);
        $min = 0;
        while ($rowAttendance = mysqli_fetch_array($resultAttendance)) {
            $min+=strtotime($rowAttendance['punchout_time']) - strtotime($rowAttendance['punchin_time']);
        }
        $min = $min / 60;
        $flag = 1;
        if ($min < $minWorkMinutes) {
            $flag = 0;             //$flag is 0 is the person has worked than minimum working hours 
        }

        echo $rowEmployee[0] ." ". $date ." ". $min.'<br/>';
        $query = "INSERT INTO hs_hr_nio_attendance (emp_id,date,duration,flag) VALUES ('$rowEmployee[0]','$date','$min','$flag')";
        $resultFlag = mysqli_query($nio_conn, $query);
    }
}
?>