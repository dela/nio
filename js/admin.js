$(document).ready(function() {
    var checkUpdate = 15000;            //check for update in how much time
    var i = 1;      //flips
    var k = 1;      //flips
    var leaveChartPageNumber;  //page in leave chart  
    var nioChartPageNumber;     //page in nio chart
    var tableNumber=1;
    var index = 0 ;
    var chartNumber=1;          //
    var options;                //used in chart
    var textToPass;         // used in chart
    var seriesToPass;       // used in chart
    var dataToPass;         // used in chart
    
    var table= [1,1,1];  //table[0] -> noStatusTableRecord entry  table[1] -> unapprovedTableRecord entry table[2] -> approvedTableRecord entry 
    //--------------------- Template Work----------------------------------   
    
    $("#table-unapproved").addClass('template-darkBack');
    $("#table-approved").addClass('template-darkBack');
    $("#table-unapproved").addClass('template-lightColor');
    $("#table-approved").addClass('template-lightColor');
  
    $("#nav-nio-chart").removeClass("template-lightBack").addClass('template-darkBack');
    $("#nav-nio-chart").addClass('template-lightColor');
    

    $(".titleTd").click(function() {
        $(".titleTd").addClass('template-darkBack');
        $(".titleTd").removeClass('template-textWhite');
        $(".titleTd").addClass('template-lightColor');
        $(this).removeClass('template-darkBack');
        $(this).addClass('template-lightBack');
        $(this).removeClass('template-lightColor');
        $(this).addClass('template-textWhite');
    });
    
    $(".titleTd-chart").click(function(){
        $(".titleTd-chart").addClass('template-darkBack');
        $(".titleTd-chart").removeClass('template-textWhite');
        $(".titleTd-chart").addClass('template-lightColor');
        $(this).removeClass('template-darkBack');
        $(this).addClass('template-lightBack');
        $(this).removeClass('template-lightColor');
        $(this).addClass('template-textWhite');
        chartNumber=$(this).attr('chartNumber');
        if(chartNumber=="1"){
            //Leave Chart
            textToPass="Total number of leaves";
            seriesToPass=[{
                name: 'Leaves left',
                data: [12, 2, 3, 2, 1, 10, 12, 8]
            }, {
                name: 'Leaves Taken',
                data: [-3, -4, 4, 2, 5, 20, 13, 6]
            }
            ];
            dataToPass=['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas', 'Mango', 'Rose', 'Lily'];
            createGraph(textToPass,seriesToPass,dataToPass);
        }
        else{
            //NIO chart
            textToPass="Total number of NIOs";
            seriesToPass=[{
                name: 'NIOs rejected',
                data: [3, 5, 6, 2, 8, 1, 6, 7]
            }, {
                name: 'NIOs accepted',
                data: [1, 0, 7, 4, 2, 8, 3, 3]
            }
            ];
            dataToPass=['Peacock', 'Tiger', 'Lion', 'Owl', 'Deer', 'Zebra', 'Fox', 'Cow'];
            createGraph(textToPass,seriesToPass,dataToPass);
        }
    });
    
    //----------------------------------------------------------
    
    
    $("#adminSettings").click(function(){
        $("#admin-main-menu").hide();
        $("#admin-settings").show();
        $("#settings-general").show();
        $("#settings-privilege").hide();
        $("#settings-nio").hide();
        $("#settings-general").addClass('template-textWhite');
        
         
        $("#settings-privilege-tab").addClass('template-darkBack');  
        $("#settings-privilege-tab").addClass('template-lightColor');
        
        $("#settings-nio-tab").addClass('template-darkBack');
        $("#settings-nio-tab").addClass('template-lightColor');
       
        $("#settings-general-tab").removeClass('template-lightColor');
        $("#settings-general-tab").addClass('template-textWhite');
        $("#settings-general-tab").addClass('template-lightBack');  
    });
    
    $("#template-header").click(function(){
        $("#admin-settings").hide();
        $("#admin-main-menu").show();
  
        $("#table-unapproved").addClass('template-darkBack');
        $("#table-unapproved").addClass('template-border');
        $("#table-unapproved").addClass('template-lightColor');
       
        $("#table-approved").addClass('template-lightColor');
        $("#table-approved").addClass('template-darkBack');
        $("#table-approved").addClass('template-border');
        
        $("#table-noStatus").addClass('template-border');
        $("#table-noStatus").removeClass('template-darkBack').addClass('template-lightBack');
        $("#table-noStatus").removeClass('template-lightColor').addClass('template-textWhite');
        
        $(".admin-table-div").hide();
        $("#table-noStatusTable").show();
    });
    
    
    $("#settings-privilege-tab").click(function(){
        $("#privilege-access-tab").addClass('template-darkBack');
        $("#privilege-access-tab").addClass('template-border');
        $("#privilege-access-tab").addClass('template-lightColor');
       
        $("#privilege-candid-tab").removeClass('template-lightColor');
        $("#privilege-candid-tab").addClass('template-textWhite');
        $("#privilege-candid-tab").removeClass('template-darkBack').addClass('template-lightBack');
        $("#privilege-candid-tab").addClass('template-border'); 
        
        $("#table-access").hide();
        $("#table-candid").show();
    });
    
    $("#privilege-access-tab").click(function(){
        $("#table-access").show();
        $("#table-candid").hide();
    });
    
    $("#privilege-candid-tab").click(function(){
        $("#table-access").hide();
        $("#table-candid").show();
    });
    //-------------------Scroll Function-----------------------
    
    $(".admin-table-container").mCustomScrollbar({
        theme:"dark",
        callbacks:{
            onTotalScrollOffset: 400,
            onTotalScroll: function(){
                if($(this).parent().attr('tableNumber')==1)
                    populateNoStatusTable();
                if($(this).parent().attr('tableNumber')==2){
                    populateUnapprovedTable();
                }
            }
        }
    });
    
    function populateUnapprovedTable(callBackUnapprovedTable){
        // AJAX Data Loading Logic
        $.ajax({
            type: "POST",
            url: "ajax/nioTables.php",
            dataType: 'json',
            data: {
                tableNumber : 2,
                record : table[1]
            },
            success : callBackUnapprovedTable
        });
    }
 
    function callBackUnapprovedTable(data){
        var i=0;
        while(data[i]){
            $(".table-row-unapprovedTable").append(" <tr class=\"table-row-selectable\" tableNumber=2 nio_id="+data[i]['nioID']+"><td>"+
                data[i]['empID']+"</td><td>"+data[i]['empName']+"</td><td>"+
                data[i]['appDate']+"</td><td>"+data[i]['nioID']+
                "</td><td>"+data[i]['startDate']+"</td> <td>"+data[i]['endDate']+"</td> <td>"
                +data[i]['duration']+"</td></tr>");  
            ++i;
            table[1]++;
        }
        $(".admin-table-container").mCustomScrollbar("update");
        $(".admin-table-container").mCustomScrollbar("scrollTo","h2:last",{
            scrollEasing:"easeInOutQuad"
        }); 
    }
    
    function populateNoStatusTable(){
        // AJAX Data Loading Logic
        $(".table-row-noStatusTable").append(" <tr class=\"table-row-selectable\" tableNumber=1><td>"+index+"</td><td>#2331212</td><td>Sharath</td><td>Feb 21,2013</td><td>Paid</td> </tr>"); 
        $(".admin-table-container").mCustomScrollbar("update");
        $(".admin-table-container").mCustomScrollbar("scrollTo","h2:last",{
            scrollEasing:"easeInOutQuad"
        });
       
    }
    
    function onLoad(){
        index=0;
        var i=0;
        
        $.ajax({
            type: "POST",
            url: "ajax/flip.php",
            dataType: 'json',
            data: {
                flip: 2
            },
            success :function( data ) {
                var elem = $("#nioCount").find('.admin-flip-part2');
                elem.html("<h1 style=\"font-size : 50; text-align: center;padding-top: 30px\">" + data[0]['nioCount'] + "</h1>");
            }
        }); 
        
        textToPass="Total number of leaves";
        seriesToPass=[{
            name: 'Leaves left',
            data: [2, 2, 3, 2, 1, 10, 12, 8]
        }, {
            name: 'Leaves Taken',
            data: [-3, -4, 4, 2, 5, 20, 13, 6]
        }
        ];
        dataToPass=['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas', 'Mango', 'Rose', 'Lily'];
        createGraph(textToPass,seriesToPass,dataToPass);
        
        for(i=0;i<25;i++)
        {
            populateNoStatusTable();
        }
    }
  
    $(onLoad);
    
    //--------------Tables--------------------------------
    $(".admin-table-div").hide();
    $("#table-noStatusTable").show();

    $("#table-noStatus").click(function() {
        $(".admin-table-div").hide();
        $("#table-noStatusTable").show();
    });

    $("#table-approved").click(function() {
        $(".admin-table-div").hide();
        $("#table-approvedTable").show(); 
    });

    $("#table-unapproved").click(function() {
        $(".admin-table-div").hide();
        $("#table-unapprovedTable").show();
        
        $("#table-unapprovedTable .table-row-unapprovedTable").empty();
      
        table[1]=1;      //reset to fetch the first record.
             
        populateUnapprovedTable(callBackUnapprovedTable);
    });
    //-----------------Approved Table-----------------------

    $("body").delegate(".table-row-selectable","click",function() {
        var nio_id;
        var table = $(this).closest('table');
        console.log(table.attr('tableNumber'));
        tableNumber = parseInt($(this).attr('tableNumber'), 10);
        switch (tableNumber) {
            case 1: //
                break;
            case 2:
                nio_id = $(this).attr('nio_id');
                console.log(nio_id);
                $("#popUp-unapproved").dialog({
                    modal:true,
                    draggable:false,
                    title: "Unapproved NIO",
                    closeText: "hide",
                    dialogClass: 'no-close success-dialog',
                    width: 700,
                    height: 450,
                    buttons:[
                    {
                        text: "Accept",
                        click: function() {
                            $.ajax({
                            type: "POST",
                            url: "ajax/changeNioStatus.php",
                            dataType: 'json',
                            data: {
                               nioID: nio_id,
                               status: 1
                            },
                            success : function(data){
                                console.log(data);
                                alert("success");
                            }
                        });  
                        },
                        'class':"button-green"
                    },
                    {
                        text: "Reject",
                        click: function() { 
                        },
                        'class':"button-red"
                    }
                    ],
                    open: function( event, ui ) {        
                        $("#popUp-unapproved").empty();
                        $.ajax({
                            type: "POST",
                            url: "ajax/nioUnapproved.php",
                            dataType: 'json',
                            data: {
                               nioID: nio_id
                            },
                            success : function(data){
                                console.log(data);
                                 $("#popUp-unapproved").append("<h1> NIO ID: "+nio_id+"</h1>");
                                 var empID=data['genDetails']['empID'];
                                 var empName=data['genDetails']['empName'];
                                 var appDate=data['genDetails']['dateApplied'];
                                 $("#popUp-unapproved").append("<h1>ID: "+empID+"</h1>");
                                 $("#popUp-unapproved").append("<h1>NAME: "+empName+"</h1>");
                                 $("#popUp-unapproved").append("<h1>APPLICATION DATE: "+appDate+"</h1>");   
                            }
                        });  
                    }
                });
                break;
            case 3:
                nio_id = $(this).attr('nio_id');
                console.log(nio_id);
                $('.admin-sheet').show();
                $("#popUp-approved").dialog({
                    modal:true,
                    draggable:false,
                    title: "Leave or NIO not applied",
                    closeText: "hide",
                    dialogClass: 'no-close success-dialog',
                    open: function( event, ui ) {        
                        $("#popUp-approved").empty();
                        $("#popUp-approved").append("<h1>"+nio_id+"</h1>");   
                    }
                });
                break;
        }
    });

    
    
    //---------------ADMIN SETTINGS------------------------------------
    
    $("#settings-general-tab").click(function(){
        $(".settings-contents").hide();
        $("#settings-general").show();
    });
    
    $("#settings-privilege-tab").click(function(){
        $(".settings-contents").hide();
        $("#settings-privilege").show();
    }); 
    
    $("#settings-nio-tab").click(function(){
        $(".settings-contents").hide();
        $("#settings-nio").show();
    }); 
    
    $(".navigation-tab").click(function() {
        $(".navigation-tab").addClass('template-darkBack');
        $(".navigation-tab").removeClass('template-textWhite');
        $(".navigation-tab").addClass('template-lightColor');
        $(this).removeClass('template-darkBack');
        $(this).addClass('template-lightBack');
        $(this).removeClass('template-lightColor');
        $(this).addClass('template-textWhite');
    });
 
    $(".cb-enable").click(function(){
        var parent = $(this).parents('.switch');
        $('.cb-disable',parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox',parent).attr('checked', true);
    });
    $(".cb-disable").click(function(){
        var parent = $(this).parents('.switch');
        $('.cb-enable',parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox',parent).attr('checked', false);
    });
 
    $(".leave-prio-box").sortable({
        stop: function(e, ui) {
            // gets the new and old index then removes the temporary attribute
            var index = ui.item.index();
            var highestIndex=0;
            $(this).removeAttr('data-previndex');
            $('[flag=1]').each(function() {
                highestIndex=$(this).index();
            });
            $('[flag=0]').each(function() {
                if(highestIndex<$(this).index()){
                    $(this).css({
                        "background-color":"grey"
                    });
                }
                else{
                    $(this).css({
                        "background-color":"#E68A2E"
                    });
                }
                    
            });
        }
    });  
   
    $(".nio-reasons-box ul").sortable();
    $(".nio-reasons-box").mCustomScrollbar({
        theme:"dark"
    });
 
    $(".add-nio-reason").click(function(){
        var nioReason=$("#nio-reason-to-add").val();
        if( nioReason.length){
            $("#nio-reason-to-add").val("");
            $("#element-nio-reason div ul").append("<li class=\"nio-reason\"><table><tr><td style=\"width: 75%\">"+nioReason+"</td><td><img src=\"images/close_graph.png\"></td></tr></table></li>");
            $(".nio-reasons-box").mCustomScrollbar("update");
            $(".nio-reasons-box").mCustomScrollbar("scrollTo","h2:last",{       
                theme:"dark"
            });
        }
    });
    
    $("body").delegate(".nio-reason table tr td img","click",function(){
        $(this).parent().parent().parent().parent().parent().css({
            "margin":"0px",
            "padding":"0px"
        });
        $(this).parent().parent().parent().parent().empty();
    });



    //--------------------------Hide And Show Graph     --------------------------------
    $(".admin-graph-controlShow" ).tooltip({
        content: "Show Graph"
    });
    $("#closeGraph img" ).tooltip({
        content: "Close Graph"
    });
    
    $(".searchBox input" ).tooltip({
        content: "Employee Name"
    });
    
    $(".searchBox select" ).tooltip({
        content: "Select Employee Designation"
    });
    
    
    $(".admin-graph-controlShow").hide();
   
    $("#closeGraph img").click(function() {
        $(".admin-graph-box").slideToggle(1000);
        $(".admin-graph-controlShow").slideToggle(500);
    });
    
    $(".admin-graph-controlShow").click(function() {
        $(".admin-graph-box").slideToggle(1000);
        $(".admin-graph-controlShow").slideToggle(500);
    });
     
    //--------------------Graph Pagination-----------------------
    $("#admin-graph-left").click(function(){
        if(chartNumber=="1"){
            leaveChartPageNumber--;
            if(leaveChartPageNumber==0){
                ++leaveChartPageNumber;
            }
            else{
                textToPass="Total number of leaves";
                seriesToPass=[{
                    name: 'Leaves left',
                    data: [2, 2, 3, 2, 1, 10, 12, 8]
                }, {
                    name: 'Leaves Taken',
                    data: [-3, -4, 4, 2, 5, 20, 13, 6]
                }
                ];
                dataToPass=['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas', 'Mango', 'Rose', 'Lily'];
                createGraph(textToPass,seriesToPass,dataToPass);
            }
        }
        else{
            leaveChartPageNumber--;
            if(leaveChartPageNumber==0){
                ++leaveChartPageNumber;
            }else{ 
                textToPass="Total number of NIOs";
                seriesToPass=[{
                    name: 'NIOs rejected',
                    data: [2, 2, 3, 2, 1, 10, 12, 8]
                }, {
                    name: 'NIOs accepted',
                    data: [-3, -4, 4, 2, 5, 20, 13, 6]
                }
                ];
                dataToPass=['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas', 'Mango', 'Rose', 'Lily'];
                createGraph(textToPass,seriesToPass,dataToPass);
            }
        }
    });

    $("#admin-graph-right").click(function(){
        if(chartNumber=="1"){
            leaveChartPageNumber++;
            if(leaveChartPageNumber==6){
                --leaveChartPageNumber;
            }
            else{
                textToPass="Total number of leaves";
                seriesToPass=[{
                    name: 'Leaves left',
                    data: [3, 5, 6, 2, 8, 1, 6, 7]
                }, {
                    name: 'Leaves Taken',
                    data: [1, 0, 7, 4, 2, 8, 3, 3]
                }
                ];
                dataToPass=['Peacock', 'Tiger', 'Lion', 'Owl', 'Deer', 'Zebra', 'Fox', 'Cow'];
                createGraph(textToPass,seriesToPass,dataToPass);
            }
        }
        else{
            nioChartPageNumber++;
            if(nioChartPageNumber==6){
                --nioChartPageNumber;
            }
            else{
                
                textToPass="Total number of NIOs";
                seriesToPass=[{
                    name: 'NIOs rejected',
                    data: [3, 5, 6, 2, 8, 1, 6, 7]
                }, {
                    name: 'NIOs accepted',
                    data: [1, 0, 7, 4, 2, 8, 3, 3]
                }
                ];
                dataToPass=['Peacock', 'Tiger', 'Lion', 'Owl', 'Deer', 'Zebra', 'Fox', 'Cow'];
                createGraph(textToPass,seriesToPass,dataToPass);
            }
        }
    });
    
    //----------------------------STICKY----------------
    $(".admin-flip-container").sticky({
        topSpacing: 0
    });
    
    //---------------Live Tile-----------------------------

    $('.admin-flip').liveTile({
        mode: 'flip',
        delay: -1
    });

    window.setInterval(function() {
        ++i;
        var elem = $("#leaveCount").find('.admin-flip-part2');
        elem.html("<h1 style=\"font-size : 50; text-align: center;padding-top: 30px\">" + i + "</h1>");
    }, checkUpdate);

    window.setInterval(function() {
        $.ajax({
            type: "POST",
            url: "ajax/flip.php",
            dataType: 'json',
            data: {
                flip: 2
            },
            success :function( data ) {
                var elem = $("#nioCount").find('.admin-flip-part2');
                elem.html("<h1 style=\"font-size : 50; text-align: center;padding-top: 30px\">" + data[0]['nioCount'] + "</h1>");
            }
        }); 
    }, checkUpdate);

    window.setInterval(function() {
        ++k;
        var elem = $("#adminSettings").find('.admin-flip-part2');
        elem.html("<h1 style=\"font-size : 50; text-align: center;padding-top: 30px\">" + k + "</h1>");
    }, checkUpdate);
    //------------------------------CLICK OF FLIP----------------------
    
    $("#nioCount").click(function(){
        $("#admin-settings").hide();
        $("#admin-main-menu").show();
        $(".titleTd").addClass('template-darkBack');
        $(".titleTd").removeClass('template-textWhite');
        $(".titleTd").addClass('template-lightColor');
        $("#table-unapproved").removeClass('template-darkBack');
        $("#table-unapproved").addClass('template-lightBack');
        $("#table-unapproved").removeClass('template-lightColor');
        $("#table-unapproved").addClass('template-textWhite');
        $(".admin-table-div").hide();
        $("#table-unapprovedTable").show();
        
        $("#table-unapprovedTable .table-row-unapprovedTable").empty();
      
        table[1]=1;      //reset to fetch the first record.
             
        populateUnapprovedTable(callBackUnapprovedTable);
    });
 
 
    function createGraph(text,series,data){
     
        //data means the names on x axis
        //text means the y axis name
        //series is the data of the two columns and their respective names.
     
        options={
            drilldown:{
                animation: false
            },
            loading:{
                showDuration: 0  
            },
            colors: ['#E77817', '#E68A2E'],
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
                categories: data
            },
            yAxis: {
                min: 0,
                title: {
                    text: text
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -70,
                verticalAlign: 'top',
                y: 20,
                floating: true,
                backgroundColor: 'transparent',
                borderColor: '#F9D597',
                borderWidth: 1,
                shadow: false,
                layout: 'vertical'
            },
            tooltip: {
                formatter: function() {
                    return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: '#f6f3f7',
                        style: {
                            textShadow: '0 0 3px black, 0 0 3px black'
                        }
                    }
                },
                series:{
                    animation: false,
                    borderColor :'#F9D597' 
                }
            },
            scrollbar: {
                enabled: true
            },
            series: series,
            column: {
                borderColor: '#F9D597'
            }
        }
        $('.admin-graph-container').highcharts(options);
    }
 
});
    
//---------------------------------------------------------------