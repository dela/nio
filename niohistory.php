<!DOCTYPE">
<html>
    <head>
        <title>NIO</title>
        <link rel="stylesheet" type="text/css" href="css/jquery-ui-1.10.4.css"/>

        <link rel="stylesheet" type="text/css" href="css/colorCombo.css"/>
        <link rel="stylesheet" type="text/css" href="css/tables.css"/> 
        <link rel="stylesheet" type="text/css" href="css/custom.css"/>
        <link rel="stylesheet" href="css/template.css" type="text/css" />

        <link rel="stylesheet" type="text/css"  href="css/empTables.css"/> 
        <link rel="stylesheet" type="text/css" href="css/jquery-ui-1.10.4.css"/>
    </head>
    <body class="template-bg" >

       <?php
        require_once 'header.php'; 
        ?>
        <div >
            <table class="history_table">
                <tr class="emp-headingTr  template-lightBack">
                    <td>NIO ID</td>
                    <td>REASON</td>
                    <td>DESCRIPTION</td>
                    <td>LOCATION </td>
                    <td>START TIME</td>
                    <td>END TIME</td>
                    <td>TIME</td>
                    <td>STATUS</td>
                    <td>ACTION</td>

                </tr>

                <?php
                $conn = mysqli_connect('localhost', 'root', '', 'nio-check');
                if (!$conn) {
                    die('Could not connect: ' . mysqli_error($conn));
                }

                $sql = "SELECT `Id`, `Subject`, `Description`,`Location`, `StartTime`, `EndTime` FROM `nio`";
                $result = mysqli_query($conn, $sql);
                while ($row = mysqli_fetch_array($result)) {

                    echo '              
                <tr class="table-row-selectable" >';

                    $t1 = strtotime($row['EndTime']);
                    $t2 = strtotime($row['StartTime']);
                    $diff = $t1 - $t2;
                    $hours = $diff / ( 60 * 60 );
                    echo '     <td>' . $row['Id'] . '</td>';
                    echo '     <td>' . $row['Subject'] . '</td>';
                    echo '     <td>' . $row['Description'] . '</td>';
                    echo '     <td>' . $row['Location'] . '</td>';
                    echo '     <td>' . $row['StartTime'] . '</td>';
                    echo '     <td>' . $row['EndTime'] . '</td>';
                    echo '     <td>' . $hours . '</td>';
                    echo '     <td>' . 'Waiting For Approval' . '</td>';
                    echo '     <td>' . '<button class="iconshistory" id="delete" ><img class="icon_image" src="images/cancel.png"></button>'
                    . '<button class="iconshistory" id="edit" ><img class="icon_image" src="images/edit.png"> </button>'
                    . '<button class="iconshistory" id="remind"><img class="icon_image" src="images/remind.png"> </button>' .
                    '</td>';



                    echo '</tr>';
                }
                ?>

            </table>


        </div>



        <script src="js/jquery-1.10.2.js"></script>
        <script src="js/jquery-ui-1.10.4.js"></script>

        <script src="js/custom.js"></script>


    </body>
</html>