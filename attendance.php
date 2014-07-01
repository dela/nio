<?php
    //2010-02-06 19:30:13
   echo "  <form action='#' method='POST'>  
            <input type='date' name='date'/>
            <input type='submit'/>
        </form>";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $date = $_POST['date'];
        echo $date;
        $inTime_1 = $date . " 09:00:00";
        $outTime_1 = $date . " 13:00:00";
        $inTime_2 = $date . " 14:00:00";
        $outTime_2 = $date . " 18:00:00";
        $serverName = "localhost";
        $serverUser = "root";
        $serverPassword = "";
        $databaseHRM = "hr_mysql";

        $hrm_conn = mysqli_connect($serverName, $serverUser, $serverPassword, $databaseHRM);
        $query = "SELECT emp_number FROM hs_hr_employee";
        $result = mysqli_query($hrm_conn, $query);
        $index= mysqli_query($hrm_conn, "SELECT MAX(attendance_id) FROM hs_hr_attendance");
        if($index){
            $index=mysqli_fetch_array($index);
            $i=$index[0]+1;
        }
        else{
            $i=0;
        }
        while ($row = mysqli_fetch_array($result)) {
            $flag=rand(1,5);
            echo $flag."\r";
            if($flag!=2){
            $query = "INSERT INTO hs_hr_attendance (attendance_id,employee_id, punchin_time,punchout_time) VALUES ('$i','$row[0]','$inTime_1','$outTime_1')";
            $flag = mysqli_query($hrm_conn, $query);
            $i++;
            $query = "INSERT INTO hs_hr_attendance (attendance_id,employee_id, punchin_time,punchout_time) VALUES ('$i','$row[0]','$inTime_2','$outTime_2')";
            $flag = mysqli_query($hrm_conn, $query);
            $i++;
            }
        }
    }
    ?>