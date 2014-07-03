
$(document).ready(function() {


    $("#temptime").datepicker({picker: "<img class='picker' align='middle' src='images/cal-month.png' alt=''/>"});
    var date = "2010-02-06";
    console.log(date);
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

            console.log(data);
            
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
                        data: yettowork
                    }, {
                        name: 'Work',
                        data: work
                    }], colors: ['#E77817', '#fcb334']
            });


        }
    });

    $('#week').hide();
    $('#month').hide();
    //   $('#day').show();

    /*
     
     //graph for day 
     function nioChart(nioChartCallBack){
     $.ajax({
     dataType: 'json',
     url: 'ajax/nioGraph.php',
     type: 'post',
     data:{
     page: nioChartPageNumber
     },
     success: function(data){
     dataToPass=data[2];
     textToPass="Total number of NIOs";
     var nioApplied=[0,0,0,0,0,0,0,0];
     var nioAccepted=[0,0,0,0,0,0,0,0];
     var i=0;
     while(data[0][i]){
     nioApplied[i]=parseInt(data[0][i],10);
     nioAccepted[i]=parseInt(data[1][i],10);
     ++i;  
     }
     if(i==8)
     createGraphNIO(textToPass,nioAccepted,nioApplied,dataToPass);
     else
     decrementNIOChartPage();
     }
     });
     }
     
     
     
     
     //end of graph for day chart
     
     
     
     //function for graph chart
     function createGraphNIO(text,nioAccepted,nioApplied,names){         //Creation of NIO Graph
     
     //data means the names on x axis
     //text means the y axis name
     //series is the data of the two columns and their respective names.
     
     options={
     colors: ['#E77817', '#fcb334'],
     chart: {
     backgroundColor : '#F9D597',
     type: 'column',
     renderTo: 'admin-graph-container',
     borderColor: '#F9D597',
     plotBorderColor: '#F9D597'
     },
     title: {
     text: ''
     },
     xAxis: {
     categories: names
     },
     yAxis: {
     min: 0,
     title: {
     text: text
     }
     },
     tooltip: {
     headerFormat: '<span>{point.key}</span><table style="font-size:10px;font-family: Segoe UI;font-weight:bold">',
     pointFormat: '<tr><td style="=font-size:10px;font-family: Segoe UI;color:{series.color};padding:0">{series.name}: </td>' +
     '<td style="font-size:10px;font-family: Segoe UI;padding:0"><b>{point.y}</b></td></tr>',
     footerFormat: '</table>',
     shared: true,
     useHTML: true
     },
     plotOptions: {
     column: {
     pointPadding: 0.2,
     borderWidth: 0
     },
     series:{
     animation: false,
     borderColor :'#F9D597' 
     }
     },
     column: {
     borderColor: '#F9D597'
     },
     series: [ {
     name: 'NIO Applied',
     data: nioApplied
     
     },{
     name: 'NIO Accepted',
     data: nioAccepted
     
     }
     ]
     }
     $('.admin-graph-container').highcharts(options);
     }
     });
     
     
     
     // end of function for graph chart
     
     
     
     
     
     
     
     
     */







































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

