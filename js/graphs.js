
$(document).ready(function() {


    //   $("#temptime").datepicker({picker: "<img class='picker' align='middle' src='images/cal-month.png' alt=''/>"});


    $('#week').hide();
    $('#month').hide();
    //   $('#day').show();


    $('#day').highcharts({
        chart: {
            type: 'bar'

        },
        title: {
            text: 'Daily Analysis chart'
        },
        xAxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Working Hours'

            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'

            }
        },
        series: [{
                name: 'Yet to work ',
                color: '#FFB84D',
                data: [0, 2.75, 1.25, 4, 3.75, .05, 0]
            }, {
                name: 'Worked out',
                color: ' #66A3FF',
                data: [0, 6, 7.5, 4.75, 5, 8.7, 0]
            }]
    });







    $('#week').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Weekly Analysis chart'
        },
        xAxis: {
            categories: ['Week1', 'Week2', 'Week3', 'Week4']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Working Hours'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
                name: 'Yet to work ',
                color: '#FFB84D',
                data: [4, 24, 2, 10]
            }, {
                name: 'Worked out',
                color: '#66A3FF',
                data: [40, 20, 42, 34]
            }]
    });











    $('#month').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Monthly Analysis chart'
        },
        xAxis: {
            categories: [' January', 'February ', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobar', 'November', 'December']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Working Hours'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
                name: 'Yet to work ',
                color: '#FFB84D',
                data: [22, 41, 62, 13, 3, 23, 69, 8, 35, 71, 4, 32]
            }, {
                name: 'Worked out',
                color: ' #66A3FF',
                data: [162, 143, 122, 171, 181, 161, 115, 176, 149, 113, 180, 152]
            }]
    });








//daily chart









 $("#daily_graph").css("background-color", "#e77817");

    $("#daily_graph").click(function() {
        $('#day').show();
        $('#week').hide();
        $('#month').hide();
        $(this).css("background-color", "#e77817");
        $("#weekly_graph").css("background-color", "orange");
        $("#monthly_graph").css("background-color", "orange");
    });




//weekly chart
    $("#weekly_graph").click(function() {
        $('#month').hide();
        $('#day').hide();
        $('#week').show();
        $(this).css("background-color", "#e77817");
        $("#monthly_graph").css("background-color", "orange");
        $("#daily_graph").css("background-color", "orange");
    });



//yearly chart
    $("#monthly_graph").click(function() {
        $('#month').show();
        $('#day').hide();
        $('#week').hide();
        $(this).css("background-color", "#e77817");
        $("#daily_graph").css("background-color", "orange");
        $("#weekly_graph").css("background-color", "orange");
    });






















});

