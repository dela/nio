<?php
include("dbConnection.php");

echo ' <form method="post" action="niorequest.php">
        <span>Emp ID</span><input type="text" name="appID"/><br/>
        <span>Application Date</span><input type="date" name="appDate"/><br/>
        <span>NIO date</span><input type="date" name="nioDate"/><br/>
        <span>Start Time</span><input type="time" name="startTime"><br/>
        <span>End Time</span><input type="time" name="endTime"/><br/>
        <input type="submit"/><br/>
    </form>';


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $empID = $_POST['appID'];
    $appDate = $_POST['appDate'];
    $nioDate = $_POST['nioDate'];
    $startTime = $_POST['startTime'];
    $endTime = $_POST['endTime'];
    $nioType = 1;
    $nioStatus = 0;
    $totalMin = (strtotime($endTime) - strtotime($startTime)) / 60;


    echo $empID;
    echo "<br/>";
    echo $appDate;
    echo "<br/>";
    echo $nioDate;
    echo "<br/>";
    echo $startTime;
    echo "<br/>";
    echo $endTime;
    echo "<br/>";

    $query = "SELECT MAX(nio_id) AS max FROM hs_hr_nio";
    $result = mysqli_query($nio_conn, $query);
    $row = mysqli_fetch_array($result);
    $nioID = $row['max']+1;
    if (!$nioID)
        $nioID = 1;
    $query = "INSERT INTO hs_hr_nio_details (nio_id,nio_date,nio_start_time,nio_end_time) VALUES ('$nioID','$nioDate','$startTime','$endTime')";
    $result = mysqli_query($nio_conn, $query);
    $query = "INSERT INTO hs_hr_nio_request(nio_id,nio_date_applied,nio_type) VALUES ('$nioID','$appDate','$nioType')";
    $result = mysqli_query($nio_conn, $query);
    $query = "SELECT MAX(nio_request_id) FROM hs_hr_nio_request WHERE nio_id='$nioID'";
    $result = mysqli_query($nio_conn, $query);
    $rowRequest = mysqli_fetch_array($result);
    $nioRequestID = $rowRequest[0];
    $query = "INSERT INTO hs_hr_nio (nio_id,nio_status,nio_request_id,nio_type,emp_id,nio_duration,nio_description) VALUES ('$nioID','$nioStatus','$nioRequestID','$nioType','$empID','$totalMin','left id card')";
    $result = mysqli_query($nio_conn, $query);
}
?>