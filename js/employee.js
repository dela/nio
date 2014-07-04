$(document).ready(function(){
    $("#nio-cal-checkbox").attr('disabled',true).prop('checked',false);
    var aspectRatio;
    
    aspectRatio=($(document).width()*0.73)/($(document).height()*0.855);
    
    
    var dateObject=[];
    var index=0;
    var recordNumber=1;
    var selectedDates =[];
    var dropDown_1="";
    var dropDown_2="";
    //-------------------Application of NIO---------------------------------
    function minToTimeFormat(time){
        var min=time%60;
        var hour=Math.floor(time/60);
    
        if(hour<10)
            hour="0"+hour;
        if(min<10)
            min='0'+min;
    
        time=hour+":"+min;
    
        return time;
    }
    //-------------------------------------------------------------------------
    $('#nio-calendar').fullCalendar({
        theme: true,
        firstDay: 1,
        aspectRatio: aspectRatio,
        header: {
            center: 'title',
            right: 'today next nextYear',
            left: 'prevYear prev'
        },
        weekMode: 'liquid',
        selectable: true,
        select:function(start, end, jsEvent, view){
            $("#nio-cal-checkbox").attr('disabled',false);
            dropDown_1="";
            dropDown_2="";
            var endDate=end;
            var i=start;
            var startTime=0;
            var endTime=24*60;
            var period=30;
            var j=startTime;
            
            while(j<endTime){           //setting options
                dropDown_1+="<option value="+minToTimeFormat(j)+">"+minToTimeFormat(j)+"</option>";
                j+=period;
            }
            j=startTime+60;
            while(j<=endTime){          //setting options
                dropDown_2+="<option value="+minToTimeFormat(j)+">"+minToTimeFormat(j)+"</option>";
                j+=period;
            }
            dropDown_1=dropDown_1+"</select>";
            dropDown_2=dropDown_2+"</select>";
            
            var temp;       //to check the entry of a date
            while(i<endDate){
                temp=i;
                dateObject.push({
                    'id':index,
                    'date':temp.unix()*1000,
                    'startTime':'09:00',
                    'endTime':'17:00'
                });
                index++;
                selectedDates.push(temp.unix()*1000);
                console.log(selectedDates);
                i.add('days',1);
            }
            console.log(dateObject);
            $('.nio-apply-dates').empty();
            i=0;
            var date;
            selectedDates.sort();
            dateObject.sort(function(a,b) {
                return parseInt(a.date) - parseInt(b.date)
            });
            console.log(dateObject);
            
            while(i<dateObject.length){
                date=moment(parseInt(dateObject[i].date)).format("YYYY-MM-DD");
                $('.nio-apply-dates').append("<tr class='nio-row-date' id="+dateObject[i].id+">"+
                    "<td><input style='margin-left: 1%;float: right' type='checkbox'/></td>"+
                    "<td style='text-align: left;padding: 2%'>"+date+"</td>"+
                    "<td>"+"<select class='nio-starttime-drop' >"+dropDown_1+" to "+"<select class='nio-endtime-drop'>"+dropDown_2+"</td>"+
                    "<td class='nio-date-alert'><img src='images/exclamation18.png'/></td>"+
                    "<td class='nio-date-remove'><img src='images/close_graph_black.png'/></td>"+
                    "</tr>");
                console.log(selectedDates);
                 $('.nio-row-date').each(function(){
                    if( $(this).attr('id') == dateObject[i].id ){
                        $(this).find('.nio-starttime-drop').val(dateObject.startTime);
                        $(this).find('.nio-endtime-drop').val(dateObject.endTime);
                    }
                        
                });
                i++;
               
            }
            
            if(dateObject.length==0)
                $("#nio-cal-checkbox").attr('disabled',true).prop('checked',false);
            else
                $("#nio-cal-checkbox").prop('checked',false);
        }
        
    });

    $("#nio-cal-removeButton").click(function(){
        var i=1;
        var id;
        var input;
        var row=$('.nio-apply-dates tr:nth-child('+i+')');
        while(row.length>0){
            console.log(row+" "+row.find('td input'));
            input=row.find('input');
            if(input.prop('checked')){
                id=row.attr('id');
                $.each(dateObject, function(j){
                    if(dateObject[j].name === id) {
                        dateObject.splice(j,1);
                        return false;
                    }
                });
                row.remove();
            }
            else
                ++i;
            row=$('.nio-apply-dates tr:nth-child('+i+')');
        }
        if(selectedDates.length==0)
            $("#nio-cal-checkbox").attr('disabled',true).prop('checked',false);
        else
            $("#nio-cal-checkbox").prop('checked',false);
    });

    $("#nio-cal-addButton").click(function(){
        var i=1;
        var date=moment();
        var input;
        var startTime;
        var endTime;
        var row=$('.nio-apply-dates tr:nth-child('+i+')');
        while(row.length>0){
            input=row.find('input')              
            if(input.prop('checked')){
                date=row.attr('date');
                startTime=row.find('.nio-starttime-drop').val();
                endTime=row.find('.nio-endtime-drop').val();
                startTime+=":00";
                endTime+=":00";
                date=moment(parseInt(date)).format("YYYY-MM-DD");
                console.log(date);
                startTime=date+"T"+startTime;
                endTime=date+"T"+endTime;
                selectedDates.splice(selectedDates.indexOf(date),1);
                row.remove();
                var eventObject={
                    id: 1,
                    title  : 'Event',
                    start  : startTime,
                    end: endTime,
                    description: 'This is a cool event',
                    color: '#F9C775',
                    textColor: 'black'
                };
                $('#nio-calendar').fullCalendar('renderEvent',eventObject,true);
           
            }
            else
                ++i;
            row=$('.nio-apply-dates tr:nth-child('+i+')');
        }
        if(selectedDates.length==0)
            $("#nio-cal-checkbox").attr('disabled',true).prop('checked',false);
        else
            $("#nio-cal-checkbox").prop('checked',false);
    });
    
    
    $('#nio-cal-applyButton').click(function(){
        var title="NIO APPLICATION";
        $("#popup-nio-apply").dialog({
            position:{
                my: "center", 
                at: "center", 
                of: window
            },
            modal:true,
            draggable:false,
            title: title,
            closeText: "hide",
            dialogClass: 'no-close success-dialog',
            width: 700,
            height: 550,
            buttons:[
            {
                text: "Apply",
                click: function() {}
                            
            },
            {
                text: "Cancel",
                click: function() {}
                       
            }
            ],
            open: function( event, ui ) {        
                $("#popup-nio-apply").empty();
                var nioID=2734;
                var empID=1;
                var date='7-3-2014';
                var empName="Roshan David";
                $("#popup-nio-apply").append("<table style='width: 100%'>"+
                    "<tr><td style='text-align: left'><b>NIO ID: </b></td><td style='text-align: left'>"+nioID+"</td><td style='text-align: left'><b>Date: </b></td><td style='text-align: left'>"+date+"</td></tr>"+
                    "<tr><td style='text-align: left'><b>Employee Name: </b></td><td style='text-align: left'>"+empName+"</td><td style='text-align: left'><b>Employee ID: </b></td><td style='text-align: left'>"+empID+"</td></tr>"+
                    "</table>"); 
                             
                $("#popup-nio-apply").append("<table style='width: 100%'>"+
                    "<tr><td style='text-align: left'><b>Reason: </b></td><td style='text-align: left'>"+nioID+"</td></tr></table>"); 
                             
                $("#popup-nio-apply").append("<table style='width: 100%'>"+
                    "<tr><td style='text-align: left'><b>Application: </b></td></tr></table>"); 
                $("#popup-nio-apply").append('<table class="flatTable-heading template-lightBack">'+
                    '<tr class="headingTr template-lightBack"><td>Date</td><td>From</td><td>To</td><td>Duration</td></tr>');
                $("#popup-nio-apply").append('</table>');
                                
                var i=0;
                while(i<5){
                    $("#popup-nio-apply").append('<table class="flatTable table-row-noStatusTable">'+
                        '<tr class="table-row-selectable">'+
                        ' <td>'+"12-12-2009"+'</td>'+
                        ' <td>'+"9:00"+'</td>'+
                        ' <td>'+"17:00"+'</td>'+
                        ' <td>'+"8.0h"+'</td>'+
                        ' </tr>'+
                        '</table>');
                    ++i;
                }
            }
        });
    });

    $('#nio-cal-cancelButton').click(function(){
        var title="NIO APPLICATION";
        $("#popup-nio-apply").dialog({
            position:{
                my: "center", 
                at: "center", 
                of: window
            },
            modal:true,
            draggable:false,
            title: title,
            closeText: "hide",
            dialogClass: 'no-close success-dialog',
            width: 300,
            height: 150,
            buttons:[
            {
                text: "Yes",
                click: function() {
                    $( this ).dialog( "close" );
                    window.location='index.php';
                }      
            },
            {
                text: "No",
                click: function() {
                    $( this ).dialog( "close" );
                }
            }
            ],
            open: function( event, ui ) {        
                $("#popup-nio-apply").empty();
                $("#popup-nio-apply").append("Cancel Application?");
            }
        });
    });

    $("body").delegate(".nio-apply-dates .nio-date-remove","click",function() {
        var date=$(this).parent('tr').attr('date');
        selectedDates.splice(selectedDates.indexOf(date),1);
        $(this).parent('tr').remove();
    
    });

    $("#nio-cal-checkbox").click(function(){
        if($('.nio-apply-dates input').prop('checked')){
            $('.nio-apply-dates input').prop('checked', false);
            $('#nio-cal-checkbox').prop('checked', false);
        }
            
        else{
            $('.nio-apply-dates input').prop('checked', true);
            $('#nio-cal-checkbox').prop('checked', true);
        }
             
    });
    
   
    //-------------------Employee NIO History--------------------------

    function populateNIOHistoryTable(callBackNIOHistoryTable){
        $.ajax({
            type: "POST",
            url: "ajax/nioHistoryTable.php",
            dataType: 'json',
            data: {
                record : recordNumber
            },
            success : callBackNIOHistoryTable
        });
    }
 
    function callBackNIOHistoryTable(data){
        var i=0;
        while(data[i]){
            $(".table-row-nioHistoryTable").append(" <tr class=\"table-row-selectable\" nioID="+data[i]['nioID']+"><td>"+
                data[i]['nioID']+"</td><td>"+data[i]['reqID']+"</td><td>"+
                data[i]['reason']+"</td><td>"+data[i]['appDate']+
                "</td><td>"+data[i]['status']+"</td> <td>"+data[i]['duration']+"</td></tr>");  
            ++i;
            recordNumber++;
        }
        $(".admin-table-container").mCustomScrollbar("update");
        $(".admin-table-container").mCustomScrollbar("scrollTo","h2:last",{
            scrollEasing:"easeInOutQuad"
        }); 
    }


    function onLoad(){
        populateNIOHistoryTable(callBackNIOHistoryTable);
    }
    

    onLoad();

});

