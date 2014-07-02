var recordNumber=1;

//-------------------Application of NIO---------------------------------

 $('#nio-calendar').fullCalendar({
        theme: true,
        firstDay: 1,
        aspectRatio: 2.05,
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
            var format;
            while(i<endDate){
          
                $('.nio-apply-dates').append("<tr><td>"+i.format("MMM Do YY")+"</td></tr>");
                i.add('days',1);
            }  
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


