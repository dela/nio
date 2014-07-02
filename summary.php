<!DOCTYPE">
<html  style="width: 100%;">
    <head>
        <title>NIO</title>

        <link rel="stylesheet" type="text/css" href="css/colorCombo.css"/>
        <link rel="stylesheet" type="text/css" href="css/custom.css"/>
        <link href="css/dp.css" rel="stylesheet" type="text/css" /> 
        <link rel="stylesheet" href="css/template.css" type="text/css" />



    

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script> 
        <script src="http://code.highcharts.com/highcharts.js"></script>
        <script src="js/graphs.js"></script>



       <!--   <script src="js/jquery-1.10.2.js"></script> -->
        <script src="js/date.js"></script> 
        <script src="src/Plugins/datepicker_lang_US.js" type="text/javascript"></script>
        <script src="src/Plugins/jquery.datepicker.js" type="text/javascript"></script>


    </head>
    <body class="template-bg" >

        <?php
        require_once 'header.php'; 
        ?>

        <div id="datepickbox">
            <input type="text" id="temptime" />
        </div>




        <div class="summaryeach" id="daily_graph">Daily Analysis</div>
        <div class="summaryeach" id="weekly_graph">Weekly Analysis</div>
        <div class="summaryeach" id="monthly_graph">Monthly  Analysis</div>


        <div class="graph-container" id="day"></div>
        <div class="graph-container" id="week"></div>
        <div class="graph-container" id="month"></div>





    </body>
</html>