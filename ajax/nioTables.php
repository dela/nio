<?php

//Populate the tables

include_once('dbConnection.php');

$tableNumber = (int) $_POST['tableNumber'];
$recordNumber = (int) $_POST['record'] - 1;

$array = array();
if ($tableNumber == 2) {
    $query = "SELECT * FROM hs_hr_nio WHERE nio_status=0 LIMIT $recordNumber,25";
    $recordResult = mysqli_query($nio_conn, $query);
    while ($record = mysqli_fetch_array($recordResult)) {

        $empID = $record['employee_id'];
        $nioID = $record['nio_id'];
        $duration = $record['total_min'];

        $query = "SELECT * FROM hs_hr_employee WHERE emp_number=$empID";
        $result = mysqli_query($hrm_conn, $query);
        $row = mysqli_fetch_array($result);

        $empName = $row['emp_firstname'] . " " . $row['emp_lastname'];

        $query = "SELECT MAX(nio_request_id) FROM hs_hr_nio_request WHERE nio_id='$nioID'";
        $result = mysqli_query($nio_conn, $query);
        $row = mysqli_fetch_array($result);

        $nioRequestID = $row[0];

        $query = "SELECT * FROM hs_hr_nio_request WHERE nio_request_id='$nioRequestID'";
        $result = mysqli_query($nio_conn, $query);
        $row = mysqli_fetch_array($result);

        $appDate = $row['date_applied'];

        $array[] = array('empID' => $empID, 'empName' => $empName, 'appDate' => $appDate, 'nioID' => $nioID, 'startDate' => $appDate,'endDate' => $appDate, 'duration' => $duration);
    }
}
$jsonData = $array;
echo json_encode($jsonData);
?>
