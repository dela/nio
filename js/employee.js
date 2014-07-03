$(document).ready(function(){
    var recordNumber=1;
    var selectedDates =[];
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
        aspectRatio: 2.0,
        header: {
            center: 'title',
            right: 'today next nextYear',
            left: 'prevYear prev'
        },
        weekMode: 'liquid',
        selectable: true,
        select:function(start, end, jsEvent, view){
            var startDate=start;
            var endDate=end;
            var i=startDate;
            var startTime=0;
            var endTime=24*60;
            var period=30;
            var j=startTime;
            var dropDown_1="";
            var dropDown_2="";
            while(j<endTime){           //setting options
                dropDown_1+="<option>"+minToTimeFormat(j)+"</option>";
                j+=period;
            }
            j=startTime+60;
            while(j<=endTime){          //setting options
                dropDown_2+="<option>"+minToTimeFormat(j)+"</option>";
                j+=period;
            }
            dropDown_1="<select class='nio-starttime-drop'>"+dropDown_1+"</select>";
            dropDown_2="<select class='nio-endtime-drop'>"+dropDown_2+"</select>";
            var flag;       //to keep track if the condtition is true o not
            var temp;       //to check the entry of a date
            while(i<endDate){
                temp=i;
                flag=jQuery.inArray(temp.format('ll'), selectedDates);
                if(flag<0){
                    $('.nio-apply-dates').append("<tr class='nio-row-date' date="+i+">"+
                        "<td><input type='checkbox'/></td>"+
                        "<td>"+i.format('DD MMM YY ddd')+"</td>"+
                        "<td>"+dropDown_1+" to "+dropDown_2+"</td><td class='nio-date-remove'>X</td></tr>");
                    selectedDates.push(temp.format('ll'));
                    console.log(selectedDates);
                }
                i.add('days',1);
            }  
        }
        
    });

    $("#nio-cal-removeButton").click(function(){
        var i=1;
        var date;
        var input;
        var row=$('.nio-apply-dates tr:nth-child('+i+')');
        while(row.length>0){
            console.log(row+" "+row.find('td input'));
            input=row.find('input');
            if(input.prop('checked')){
                date=row.attr('date');
                selectedDates.splice(selectedDates.indexOf(date),1);
                row.remove();
            }
            else
                ++i;
            row=$('.nio-apply-dates tr:nth-child('+i+')');
        }
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
                    description: 'This is a cool event'
                }
                $('#nio-calendar').fullCalendar('renderEvent',eventObject,true);
           
            }
            else
                ++i;
            row=$('.nio-apply-dates tr:nth-child('+i+')');
        }
    });

    $("body").delegate(".nio-apply-dates .nio-date-remove","click",function() {
        alert("ok");
        var date=$(this).parent('tr').attr('date');
        selectedDates.splice(selectedDates.indexOf(date),1);
        $(this).parent('tr').remove();
    
    });


    $("#nio-cal-checkAll").click(function(){
        $('.nio-apply-dates input').prop('checked', true);
    });

    $("#nio-cal-unCheckAll").click(function(){
        $('.nio-apply-dates input').prop('checked', false);
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

