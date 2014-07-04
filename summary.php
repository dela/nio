<!DOCTYPE">
<html  style="width: 100%;">
    <head>
        <title>NIO</title>

        <link rel="stylesheet" type="text/css" href="css/colorCombo.css"/>
        <link rel="stylesheet" type="text/css" href="css/custom.css"/>
        <link href="css/dp.css" rel="stylesheet" type="text/css" /> 
        <link rel="stylesheet" href="css/template.css" type="text/css" />
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css">




        <script src="js/jquery-1.10.2.js"></script>
        <script src="//code.jquery.com/ui/1.11.0/jquery-ui.js"></script>
        <script src="js/highcharts.js"></script>
        <script src="js/graphs.js"></script>    


        



    </head>
    <body class="template-bg" >

        <?php
        require_once 'header.php';
        ?>
      




        <div class="summaryeach" id="daily_graph">Daily Analysis</div>
        <div class="summaryeach" id="weekly_graph">Weekly Analysis</div>
        <div class="summaryeach" id="monthly_graph">Monthly  Analysis</div>


        <div class="datepicker" id="datechoose">
            Date1: <input type="text" name="datepicker" id="datepicker"  />

        </div>
        <script>
       

            $(function() {
                $("#datepicker").datepicker({
                    changeMonth: true,
                    changeYear: true,
                    dateFormat:"yy/mm/dd"
                });
            });
        </script>




        <div class="datepicker" id="monthchoose">
            Date2: <input type="text" id="monthpicker">
        </div>
        <script>
            $(function() {
                $("#monthpicker").datepicker({
                    changeMonth: true,
                    changeYear: true,
                    dateFormat:"yy/mm/dd"
                });
            });
        </script>



        <div class="datepicker" id="yearchoose">
            Date3: <input type="text" id="yearpicker">
        </div>
        <script>
            $(function() {
                $("#yearpicker").datepicker({
                    changeMonth: false,
                    changeYear: true,
                    dateFormat:"yy/mm/dd"
                });
            });
        </script>


        <div class="graph-container" id="day"></div>
        <div class="graph-container" id="week"></div>
        <div class="graph-container" id="month"></div>





    </body>
</html>