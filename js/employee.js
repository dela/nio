var recordNumber=1;

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
