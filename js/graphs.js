
$(document).ready(function() {


    $("#temptime").datepicker({picker: "<img class='picker' align='middle' src='images/cal-month.png' alt=''/>"});
    var date = "2010-02-06";
    var year="2010";
   // console.log(year);
    $.ajax({
        dataType: 'json',
        url: 'ajax/attendancedaygraph.php',
        type: 'post',
        data: {
            dateselected: date
        },
        success: function(data) {
            // console.log(data);
            var work = data[0];
            var yettowork = data[1];
            var day =data[2];
            console.log(data);
            //startof day graph
            $('#day').highcharts({
                chart: {
                    type: 'bar',
                    backgroundColor: '#F9D597',
                    borderColor: '#F9D597',
                    plotBorderColor: '#F9D597'

                },
                title: {
                    text: 'Daily Analysis chart'
                },
                xAxis: {
                    categories: day
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
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.y}</b><br/>',
                    valueSuffix: ' hr',
                    shared: true
                },
                plotOptions: {
                    series: {
                        stacking: 'normal',
                        animation: false

                    }
                },
                series: [{
                        name: 'Yet to work ',
                        data: yettowork
                    }, {
                        name: 'Work',
                        data: work
                    }], colors: ['#E77817', '#fcb334']
            });


            //end of day graph 

            //start of week graph 
            $('#week').highcharts({
                chart: {
                    type: 'bar',
                    backgroundColor: '#F9D597',
                    borderColor: '#F9D597',
                    plotBorderColor: '#F9D597'
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
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.y}</b><br/>',
                    valueSuffix: ' hr',
                    shared: true
                },
                plotOptions: {
                    series: {
                        stacking: 'normal',
                        animation: true
                    }
                },
                series: [{
                        name: 'Yet to work ',
                        data: [4, 24, 2, 10]
                    }, {
                        name: 'Work',
                        data: [40, 20, 42, 34]
                    }], colors: ['#E77817', '#fcb334']
            });

            //end of week graph



            //start of month graph
            $('#month').highcharts({
                chart: {
                    type: 'bar',
                    backgroundColor: '#F9D597',
                    borderColor: '#F9D597',
                    plotBorderColor: '#F9D597'
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
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.y}</b><br/>',
                    valueSuffix: ' hr',
                    shared: true
                },
                plotOptions: {
                    series: {
                        stacking: 'normal',
                        animation: true
                    }
                },
                series: [{
                        name: 'Yet to work ',
                        data: [22, 41, 62, 13, 3, 23, 69, 8, 35, 71, 4, 32]
                    }, {
                        name: 'Work',
                        data: [162, 143, 122, 171, 181, 161, 115, 176, 149, 113, 180, 152]
                    }], colors: ['#E77817', '#fcb334']
            });

            //end of month graph


        }
    });

    $('#week').hide();
    $('#month').hide();
    //   $('#day').show();









































    /*
     
     
     
     
     $('#day').highcharts({
     chart: {
     type: 'bar',
     backgroundColor: '#F9D597',
     borderColor: '#F9D597',
     plotBorderColor: '#F9D597'
     
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
     tooltip: {
     pointFormat: '{series.name}: <b>{point.y}</b><br/>',
     valueSuffix: ' hr',
     shared: true
     },
     plotOptions: {
     series: {
     stacking: 'normal',
     animation: false
     
     }
     },
     series: [{
     name: 'Yet to work ',
     data: [0, 2.75, 1.25, 4, 3.75, .05, 0]
     }, {
     name: 'Work',
     data: [0, 6, 7.5, 4.75, 5, 8.7, 0]
     }], colors: ['#E77817', '#fcb334']
     });
     
     
     
     */

    /*
     
     $('#week').highcharts({
     chart: {
     type: 'bar',
     backgroundColor: '#F9D597',
     borderColor: '#F9D597',
     plotBorderColor: '#F9D597'
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
     tooltip: {
     pointFormat: '{series.name}: <b>{point.y}</b><br/>',
     valueSuffix: ' hr',
     shared: true
     },
     plotOptions: {
     series: {
     stacking: 'normal',
     animation: true
     }
     },
     series: [{
     name: 'Yet to work ',
     data: [4, 24, 2, 10]
     }, {
     name: 'Work',
     data: [40, 20, 42, 34]
     }], colors: ['#E77817', '#fcb334']
     });
     
     
     
     
     */




    /*
     
     $('#month').highcharts({
     chart: {
     type: 'bar',
     backgroundColor: '#F9D597',
     borderColor: '#F9D597',
     plotBorderColor: '#F9D597'
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
     tooltip: {
     pointFormat: '{series.name}: <b>{point.y}</b><br/>',
     valueSuffix: ' hr',
     shared: true
     },
     plotOptions: {
     series: {
     stacking: 'normal',
     animation: true
     }
     },
     series: [{
     name: 'Yet to work ',
     data: [22, 41, 62, 13, 3, 23, 69, 8, 35, 71, 4, 32]
     }, {
     name: 'Work',
     data: [162, 143, 122, 171, 181, 161, 115, 176, 149, 113, 180, 152]
     }], colors: ['#E77817', '#fcb334']
     });
     
     
     
     
     
     */


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

