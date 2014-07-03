<!DOCTYPE">
<html>
    <head>
        <title>NIO</title>

        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        
        <link rel="stylesheet" type="text/css" href="css/jquery-ui-1.10.4.css"/>
        <link rel="stylesheet" type="text/css" href="css/colorCombo.css"/>
        <link rel="stylesheet" href="css/template.css" type="text/css" />
        <link rel="stylesheet" href="css/fullcalendar.css" type="text/css" />
        <link rel="stylesheet" href="css/applyNIO.css" type="text/css" />
        <!-- from the Calender page -->
        <!--  End of calender page scripts  -->
    </head>
    <body style="overflow-y:visible;" class="template-darkBack template-height" >

        <?php
        require_once 'header.php';
        ?>
        <div class="nio-cal-contents">
            <div id="nio-calendar"></div>
            <div class="nio-selected-contents">
                <div class="nio-cal-info"></div>
                <div class="nio-apply-form">
                    <div class="nio-apply-general">
                       <select id="nio-apply-reason">
                        <option>Forgot ID</option>
                        <option>Business Trip</option>
                        <option>Work from home</option>
                        <option>Meeting with Client</option>
                    </select>
                    <button id="nio-apply-add-description">ADD DESCRIPTION</button>
                    <hr/> 
                    </div>
                    
                    <table class="nio-apply-dates"></table>
                </div>
                <div class="nio-cal-control">
                    <span id="nio-cal-checkAll" class="nio-cal-button">Check All</span>
                    <span id="nio-cal-unCheckAll" class='nio-cal-button'>Un-check All</span>
                </div>
                 <div class="nio-cal-control">
                    <span id="nio-cal-addButton" class="nio-cal-button">Add</span>
                    <span id="nio-cal-removeButton" class='nio-cal-button'>Remove</span>
                </div>
                <div class="nio-cal-control">    
                    <span id="nio-cal-cancelButton" class='nio-cal-button'>Cancel</span>
                    <span id="nio-cal-applyButton" class="nio-cal-button">Apply</span>
                </div>
            </div>
        </div>

        <script src="js/jquery-1.10.2.js"></script>
        <script src="js/jquery-ui-1.10.4.js"></script>
        <script src="js/jquery.mCustomScrollbar.js"></script>
        <script src="js/moment.min.js"></script>
        <script src="js/fullcalendar.min.js"></script>
        <script src="js/employee.js"></script>
    </body>
</html>