<!DOCTYPE">
<html>
    <head>
        <title>NIO</title>
        <link rel="stylesheet" type="text/css" href="css/jquery-ui-1.10.4.css"/>
        <link rel="stylesheet" type="text/css"  href="fonts/custom_fonts.css"/>
        <link rel="stylesheet" type="text/css"  href="css/jquery.mCustomScrollbar.css"/>
        <link rel="stylesheet" type="text/css" href="css/colorCombo.css"/>
        <link rel="stylesheet" type="text/css" href="css/magnific-popup.css"/>
        <link rel="stylesheet" type="text/css"  href="css/buttons.css"/>
        <link rel="stylesheet" type="text/css" href="css/MetroJs.css"/>
        <link rel="stylesheet" href="css/template.css" type="text/css" />
        <link rel="stylesheet" type="text/css"  href="css/admin.css"/> 
        <link rel="stylesheet" type="text/css"  href="css/adminTables.css"/> 
        <link rel="stylesheet" type="text/css" href="css/jquery-ui-1.10.4.css"/>
    </head>
    <body class="template-bg">
        <?php 
        require_once("header.php");
        ?>
        <div class="template-wrapper template-contents">

            <ul class="admin-flip-container template-tile-back">
                <li>
                    <div class="admin-flip live-tile" id='leaveCount'>
                        <div class="admin-flip-part1 template-tile">
                            <img src="./images/leave_black.png"/>
                            <span>Leave Applications Pending</span>
                        </div>
                        <div class="admin-flip-part2 template-tile"><h1 style="font-size : 50; text-align: center;padding-top: 30px">0</h1></div>
                    </div>
                </li>
                <li>
                    <div class="admin-flip live-tile" id="nioCount">
                        <div class="admin-flip-part1 template-tile">
                            <img src="./images/nio_black.png"/>
                            <span>NIO Applications Pending</span>
                        </div>
                        <div class="admin-flip-part2 template-tile"><h1 style="font-size : 50; text-align: center;padding-top: 30px">0</h1></div>
                    </div>
                </li>
                <li>
                    <div class="admin-flip live-tile" id="adminSettings">
                        <div class="admin-flip-part1 template-tile">
                            <img src="./images/setting_black.png"/>
                            <span>Admin Settings</span>
                        </div>
                        <div class="admin-flip-part2 template-tile"><h1 style="font-size : 50; text-align: center;padding-top: 30px">0</h1></div>
                    </div>
                </li>
            </ul>
            <div class="admin-container" id="admin-main-menu">
                <div class="admin-graph-controlShow">CHART</div>
                <div class="admin-graph-box">

                    <div class="admin-graph-controller template-darkBack" id="adminGraphController">
                        <table class="adminTable-menu">
                            <tr class="titleTr-graph template-lightBack">
                                <td class="titleTd-chart" id="nav-leave-chart" chartNumber=1>Leave Chart</td>
                                <td class="titleTd-chart" id="nav-nio-chart" chartNumber=2>NIO Chart</td>
                            </tr>
                        </table>
                        <div id="closeGraph">
                            <img src="images/close_graph_black.png" title="This is my tooltip">
                        </div>
                    </div>
                    <div class="admin-graph-container"></div>
                    <div id="admin-graph-left"><img src="images/left_arrow.png"></div>
                    <div id="admin-graph-right"><img src="images/right_arrow.png"></div>
                </div>

                <div class="admin-data-container">
                    <table class="adminTable-menu">
                        <tr class="titleTr template-lightBack">
                            <td class="titleTd" id="table-noStatus">NIO or Leave not applied</td>
                            <td class="titleTd" id="table-unapproved">Unapproved NIOs</td>
                            <td class="titleTd" id="table-approved">Approved NIOs</td>
                        </tr>
                    </table>

                    <div class="admin-table-div" id="table-noStatusTable" tableNumber="1">
                        <table class="flatTable-heading template-lightBack"  tableNumber=1>
                            <tr class="headingTr template-lightBack">
                                <td>CASE ID</td>
                                <td>EMPLOYEE ID</td>
                                <td>EMPLOYEE NAME</td>
                                <td>DATE</td>
                                <td>STATUS</td>
                            </tr>
                        </table>
                        <div class="admin-table-container">
                            <table class="flatTable table-row-noStatusTable">
                                <tr class="table-row-selectable" tableNumber=1>
                                    <td>345</td>
                                    <td>#2331212</td>
                                    <td>Sharath</td>
                                    <td>Feb 21,2013</td>
                                    <td>Paid</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div class="admin-table-div" id="table-unapprovedTable" tableNumber=2>
                        <table class="flatTable-heading template-lightBack"  tableNumber=2>
                            <tr class="headingTr template-lightBack">
                                <td>EMPLOYEE ID</td>
                                <td>EMPLOYEE NAME</td>
                                <td>APPLICATION DATE </td>
                                <td>NIO_ID</td>
                                <td>START DATE</td>
                                <td>END DATE</td>
                                <td>DURATION</td>
                            </tr>
                        </table>
                        <div class="admin-table-container">
                            <table class="flatTable table-row-unapprovedTable">
                                
                            </table>
                        </div>
                    </div>

                    <div class="admin-table-div" id="table-approvedTable" tableNumber=3>
                        <table class="flatTable-heading template-lightBack" tableNumber=3>
                            <tr class="headingTr template-lightBack">
                                <td>EMPLOYEE ID</td>
                                <td>EMPLOYEE NAME</td>
                                <td>APPLICATION DATE </td>
                                <td>NIO_ID</td>
                                <td>START DATE</td>
                                <td>END DATE</td>
                                <td>DURATION</td>
                            </tr>
                        </table>
                        <div class="admin-table-container">
                            <table class="flatTable table-row-approvedTable">
                               
                            </table>
                        </div>
                    </div>
                </div>
            </div><!--END OF ADMIN CONTAINER-->
            <div class="admin-container2" id="admin-settings">
                <table class="navigation-settings">
                    <tr class="navigation-options template-lightBack">
                        <td class="navigation-tab" id="settings-general-tab">General</td>
                        <td class="navigation-tab" id="settings-nio-tab">NIO</td>
                        <td class="navigation-tab" id="settings-privilege-tab">Privilege</td> 
                    </tr>
                </table>
                <div class="settings-contents" id="settings-general">
                    <div class="settings-general-options">
                        <h3>Set Options</h3>
                        <table>
                            <tr class="toggle-buttons field switch">
                                <td><span class="toggle-button-span">Send Mail Daily</span> </td>
                                <td><input type="radio" id="send-daily-on" name="field"  checked />
                                    <input type="radio" id="send-daily-off" name="field" />
                                    <label for="send-daily-on" class="cb-enable selected"><span>Yes</span></label>
                                    <label for="send-daily-off" class="cb-disable"><span>No</span></label></td>
                            </tr>

                            <tr class="toggle-buttons field switch">
                                <td><span class="toggle-button-span">Send Mail Weekly</span></td>
                                <td> <input type="radio" id="send-weekly-on" name="field"  checked />
                                    <input type="radio" id="send-weekly-off" name="field" />
                                    <label for="send-weekly-on" class="cb-enable selected"><span>Yes</span></label>
                                    <label for="send-weekly-off" class="cb-disable"><span>No</span></label> </td>
                            </tr>
                        </table>
                        <h3>Leave Priority</h3>
                        <ul class="leave-prio-box">
                            <li class="leave-prio" flag=0>Casual Leave</li>
                            <li class="leave-prio" flag=0>Privileged Leave</li>
                            <li class="leave-prio" flag=1>Payed Leave</li>
                        </ul>
                    </div>
                    <div class="settings-general-emp-nio">
                        <div id="nio-positive">
                            <input type="text" id="nio-employee-to-remove"/><br/>
                            <span class="general-button orange-button nio-remove-employee-button">ADD</span>
                        </div>
                        <ul id="nio-negative">
                            <li>
                                <div style="width: 75%">Business Trip</div>
                                <div><img src="images/close_graph_black.png"></div>
                            </li>
                            <li>
                                <div style="width: 75%">Business Trip</div>
                                <div><img src="images/close_graph_black.png"></div>
                            </li>  
                        </ul>
                    </div>
                    <div id="admin-gen-set-buttons">
                        <span class="general-button green-button gen-set-button-pos">SAVE</span>
                        <span class="general-button red-button gen-set-button-pos">REVERT</span>
                        <span class="general-button orange-button gen-set-button-pos">DEFAULT</span>
                    </div>
                </div>

                <div class="settings-contents" id="settings-nio">
                    <div id="element-nio-reason">
                        <table>
                            <tr>
                                <td>
                                    <h3>Reasons</h3>
                                    <div class="nio-reasons-box">
                                        <ul>
                                            <li class="nio-reason">
                                                <table>
                                                    <tr>
                                                        <td style="width: 75%">Business Trip</td>
                                                        <td><img src="images/close_graph_black.png"></td>
                                                    </tr>
                                                </table>
                                            </li>
                                        </ul>
                                    </div>
                                    <input type="text" id="nio-reason-to-add"/><br/>
                                    <span class="general-button orange-button add-nio-reason">ADD</span>
                                </td>

                                <td>
                                    <h3>Department</h3>
                                    <div class="nio-reasons-box">
                                        <ul>
                                            <li class="nio-reason">
                                                <table>
                                                    <tr>
                                                        <td style="width: 75%">Development</td>
                                                        <td><img src="images/close_graph_black.png"></td>
                                                    </tr>
                                                </table>
                                            </li>
                                        </ul>
                                    </div>
                                    <input type="text" id="nio-department-to-add"/><br/>
                                    <span class="general-button orange-button add-nio-reason">ADD</span>
                                </td>

                                <td>
                                    <h3>Exception Employee</h3>
                                    <div class="nio-reasons-box">
                                        <ul>
                                            <li class="nio-reason">
                                                <table>
                                                    <tr>
                                                        <td style="width: 75%">Roshan David</td>
                                                        <td><img src="images/close_graph_black.png"></td>
                                                    </tr>
                                                </table>
                                            </li>
                                        </ul>
                                    </div>
                                    <input type="text" id="nio-employee-to-add"/><br/>
                                    <span class="general-button orange-button add-nio-reason">ADD</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="settings-contents" id="settings-privilege">
                    <div class="searchBox" id="privilege-table-searchBox" title="Enter Employee Name">
                        <input type="text" id="privilege-table-dropBox"/>
                        <select title="Select Employee Designation">
                            <option>ALL</option>
                        </select>
                        <span class="orange-button" id="privilege-table-searchButton">Search</span>
                    </div>
                    <div class="admin-data-container" id="privilege-tables">
                        <table class="adminTable-menu">
                            <tr class="titleTr template-lightBack">
                                <td class="titleTd" id="privilege-candid-tab">Candidates</td>
                                <td class="titleTd" id="privilege-access-tab">Access</td>
                            </tr>
                        </table>

                        <div class="admin-table-div" id="table-candid">
                            <table class="flatTable-heading template-lightBack">
                                <tr class="headingTr template-lightBack">
                                    <td>EMPLOYEE ID</td>
                                    <td>EMPLOYEE NAME</td>
                                    <td>APPLICATION DATE </td>
                                    <td>NIO_ID</td>
                                    <td>DATE</td>
                                </tr>
                            </table>

                            <div class="admin-table-container">
                                <table class="flatTable table-row-unapprovedTable" >
                                    <tr class="table-row-selectable" nio_id=123 tableNumber=2>
                                        <td>#2331212</td>  
                                        <td>Rajesh</td>
                                        <td>Feb 21,2013</td>
                                        <td>134573</td>
                                        <td>Feb 21,2013</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="admin-table-div" id="table-access">
                            <table class="flatTable-heading template-lightBack">
                                <tr class="headingTr template-lightBack">
                                    <td>EMPLOYEE ID</td>
                                    <td>EMPLOYEE NAME</td>
                                    <td>DATE </td>
                                    <td>NIO ID</td>
                                    <td>DATE</td>
                                    <td>DURATION</td>
                                </tr>
                            </table>
                            <div class="admin-table-container">
                                <table class="flatTable table-row-approvedTable">
                                    <tr class="table-row-selectable" nio_id="123"  tableNumber=3>
                                        <td>#2331212</td>
                                        <td>Prasad</td>
                                        <td>Feb 21,2013</td>
                                        <td>34634</td>
                                        <td>Feb 21,2013</td>
                                        <td>2 Days</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!--END OF CONTENTS-->

        <div id="popUp-noStatus">

        </div>
        <div id="popUp-unapproved">

        </div>
        <div id="popUp-approved">

        </div>
        <script src="js/jquery-1.10.2.js"></script>
        <script src="js/jquery-ui-1.10.4.js"></script>
        <script src="js/jquery-radiobutton-2.0.js"></script>
        <script src="js/MetroJs.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/jquery.mCustomScrollbar.js"></script>
        <script src="js/highcharts.js"></script>
        <script src="js/jquery.blockUI.js"></script>
        <script language="javascript" type="text/javascript" src="js/admin.js"></script>
    </body>
</html>