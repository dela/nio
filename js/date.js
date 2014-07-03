
$(document).ready(function() {

    $("#datepicker").click(function() {
        $("#temptime").click();
    });

  $("#temptime").datepicker({picker: "<img class='picker' align='middle' src='images/cal-month.png' alt=''/>"});

   // var date = $("#datepicker").val();
    var date = "2010-02-08";
    console.log(date);
    $.ajax({
        dataType: 'json',
        url: 'ajax/attendancedaygraph.php',
        type: 'post',
        data: {
            dateselected: date
        }
    });

});