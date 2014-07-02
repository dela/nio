<!DOCTYPE">
<html>
    <head>
        <title>NIO</title>


        <link rel="stylesheet" type="text/css" href="css/colorCombo.css"/>


        <link rel="stylesheet" href="css/template.css" type="text/css" />

        <!-- from the CAlender page -->
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
        <link href="css/dailog.css" rel="stylesheet" type="text/css" />
        <link href="css/calendar.css" rel="stylesheet" type="text/css" /> 
        <link href="css/dp.css" rel="stylesheet" type="text/css" /> 
        <link href="css/alert.css" rel="stylesheet" type="text/css" /> 
        <link href="css/main.css" rel="stylesheet" type="text/css" /> 
        <link href="css/custom.css" rel="stylesheet" type="text/css" />
        <link href="css/dropdown.css" rel="stylesheet" />  
     



        <!--  End of calender page scripts  -->
    </head>
    <body style="overflow-y: hidden;" class="template-bg" >

        <?php
        require_once 'header.php';
        ?>

        <div id ="nioform">



            NIO Reason :
            <input  type="text" name="Reason"  id="reason"   >

            <br>
            Location   :
            <input    type="text" name="location"  id="location"   >
            <br>
            Description:
            <input    type="text" name="description"  id="description"   >
            <br>
            Start:
            <input  style="width:105px;" type="date" name="startdate" id="startdate" value="" >
            <select   id="stparttime" class="required time  bbit-dropdown" name="stparttime" style="width:75px;" type="text" value="" >
                <?php for ($i = 0; $i < 24; $i++): ?>
                    <option value="<?= $i; ?>"><?= $i % 12 ? $i % 12 : 12 ?>:00 <?= $i >= 12 ? 'pm' : 'am' ?></option>
                <?php endfor ?>   
            </select>To
            <select  id="etparttime" class="required time bbit-dropdown" name="etparttime" style="width:75px;" type="text" value="" >
                <?php for ($i = 0; $i < 24; $i++): ?>
                    <option value="<?= $i; ?>"><?= $i % 12 ? $i % 12 : 12 ?>:00 <?= $i >= 12 ? 'pm' : 'am' ?></option>
                <?php endfor ?>   
            </select>
            <br>
            /***inbetween dates***/<br>
            <div id="inbetween">
<!--
                <input  style="width:105px;"  type="date" name="inbetweendate" id="inbetweendate" value="" >
                <select  id="stparttime" class="required time  bbit-dropdown" name="stparttime" style="width:75px;" type="text" value="" >
                    <?php for ($i = 0; $i < 24; $i++): ?>
                        <option value="<?= $i; ?>"><?= $i % 12 ? $i % 12 : 12 ?>:00 <?= $i >= 12 ? 'pm' : 'am' ?></option>
                    <?php endfor ?>   
                </select>To
                <select  id="etparttime" class="required time bbit-dropdown" name="etparttime" style="width:75px;" type="text" value="" >
                    <?php for ($i = 0; $i < 24; $i++): ?>
                        <option value="<?= $i; ?>"><?= $i % 12 ? $i % 12 : 12 ?>:00 <?= $i >= 12 ? 'pm' : 'am' ?></option>
                    <?php endfor ?>   
                </select>
-->
            </div>

            /***inbetween dates***/<br>

            End :
            <input  style="width:105px;"  type="date" name="enddate" id="enddate" value="" >
            <select  id="stparttime" class="required time  bbit-dropdown" name="stparttime" style="width:75px;" type="text" value="" >
                <?php for ($i = 0; $i < 24; $i++): ?>
                    <option value="<?= $i; ?>"><?= $i % 12 ? $i % 12 : 12 ?>:00 <?= $i >= 12 ? 'pm' : 'am' ?></option>
                <?php endfor ?>   
            </select>To
            <select  id="etparttime" class="required time bbit-dropdown" name="etparttime" style="width:75px;" type="text" value="" >
                <?php for ($i = 0; $i < 24; $i++): ?>
                    <option value="<?= $i; ?>"><?= $i % 12 ? $i % 12 : 12 ?>:00 <?= $i >= 12 ? 'pm' : 'am' ?></option>
                <?php endfor ?>   
            </select>

            <br>

            <input id="save" type="submit" value="Submit">

        </div>




        <div id="calhead" style="padding-left:1px;padding-right:1px;">          


            <div id="caltoolbar" class="ctoolbar">



                <!--
                                    <div id="showdaybtn" class="fbutton">
                                        <div><span title='Day' class="showdayview">Day</span></div>
                                    </div>
                                    <div  id="showweekbtn" class="fbutton ">
                                        <div><span title='Week' class="showweekview">Week</span></div>
                  
                </div> -->
                <div id="sfprevbtn" title="Prev"  class="fbutton">
                    <span class="fprev"></span>
                </div>
                <div  id="showmonthbtn" class="fbutton fcurrent">
                    <div><span title='Month' class="showmonthview">Month</span></div>

                </div>




                <div id="sfnextbtn" title="Next" class="fbutton">
                    <span class="fnext"></span>
                </div>
                <div class="fshowdatep fbutton">
                    <div>
                        <input type="hidden" name="txtshow" id="hdtxtshow" />
                        <span id="txtdatetimeshow">CHOOSE DATE</span>

                    </div>
                </div>

            </div>
        </div>












        <div id="gridcontainer" >
        </div>









        <!--END OF CONTENTS-->


        <script src="js/jquery-1.10.2.js"></script>
        <script src="js/jquery-ui-1.10.4.js"></script>

        <script language="javascript" type="text/javascript" src="js/template.js"></script>

        <script src="src/jquery.js" type="text/javascript"></script>  

        <script src="src/Plugins/Common.js" type="text/javascript"></script>    
        <script src="src/Plugins/datepicker_lang_US.js" type="text/javascript"></script>     
        <script src="src/Plugins/jquery.datepicker.js" type="text/javascript"></script>

        <script src="src/Plugins/jquery.alert.js" type="text/javascript"></script>    
        <script src="src/Plugins/jquery.ifrmdailog.js" defer="defer" type="text/javascript"></script>
        <script src="src/Plugins/wdCalendar_lang_US.js" type="text/javascript"></script>    
        <script src="src/Plugins/jquery.calendar.js" type="text/javascript"></script>   
           <script src="js/timepick.js" type="text/javascript"></script>

        <script type="text/javascript">
            $(document).ready(function() {
                
       
                var view = "month";
               
                var DATA_FEED_URL = "php/datafeed.php";
                var op = {
                    view: view,
                    theme: 3,
                    showday: new Date(),
                    EditCmdhandler: Edit,
                    DeleteCmdhandler: Delete,
                    ViewCmdhandler: View,
                    onWeekOrMonthToDay: wtd,
                    onBeforeRequestData: cal_beforerequest,
                    onAfterRequestData: cal_afterrequest,
                    onRequestDataError: cal_onerror,
                    autoload: true,
                    url: DATA_FEED_URL + "?method=list",
                    quickAddUrl: DATA_FEED_URL + "?method=add",
                    quickUpdateUrl: DATA_FEED_URL + "?method=update",
                    quickDeleteUrl: DATA_FEED_URL + "?method=remove"
                };
                var $dv = $("#calhead");
                var _MH = document.documentElement.clientHeight;
                var dvH = $dv.height() + 2;
                op.height = _MH - dvH;
                op.eventItems = [];

                var p = $("#gridcontainer").bcalendar(op).BcalGetOp();
                if (p && p.datestrshow) {
                    $("#txtdatetimeshow").text(p.datestrshow);
                }
                $("#caltoolbar").noSelect();

                $("#hdtxtshow").datepicker({picker: "#txtdatetimeshow", showtarget: $("#txtdatetimeshow"),
                    onReturn: function(r) {
                        var p = $("#gridcontainer").gotoDate(r).BcalGetOp();
                        if (p && p.datestrshow) {
                            $("#txtdatetimeshow").text(p.datestrshow);
                        }
                    }
                });
                function cal_beforerequest(type)
                {
                    var t = "Loading data...";
                    switch (type)
                    {
                        case 1:
                            t = "Loading data...";
                            break;
                        case 2:
                        case 3:
                        case 4:
                            t = "The request is being processed ...";
                            break;
                    }
                    $("#errorpannel").hide();
                    $("#loadingpannel").html(t).show();
                }
                function cal_afterrequest(type)
                {
                    switch (type)
                    {
                        case 1:
                          $("#loadingpannel").hide();
                           break;
                        case 2:
                        case 3:
                        case 4:
                            $("#loadingpannel").html("Success!");
                            window.setTimeout(function() {
                                $("#loadingpannel").hide();
                            }, 2000);
                            break;
                    }

                }
                function cal_onerror(type, data)
                {
                   // $("#errorpannel").show();
                    
                  //  $("#gridcontainer").show();
                   //document.location.href="#month";
                    $("#gridcontainer").reload();
                    $("#caltoolbar div.fcurrent").each(function() {
                        $("#showmonthbtn").removeClass("fcurrent");
                    })
                    $("#showmonthbtn").addClass("fcurrent");
                    var p = $("#gridcontainer").swtichView("month").BcalGetOp();
                    if (p && p.datestrshow) {
                        $("#txtdatetimeshow").text(p.datestrshow);
                    }
                     $("#gridcontainer").reload();
                }
                function Edit(data)
                {
                    var eurl = "edit.php?id={0}&start={2}&end={3}&isallday={4}&title={1}";
                    if (data)
                    {
                        var url = StrFormat(eurl, data);
                        OpenModelWindow(url, {width: 700, height: 315, onclose: function()
                            {
                                $("#gridcontainer").reload();
                            }
                        }
                        );
                    }
                }
                function View(data)
                {
                    var str = "";
                    $.each(data, function(i, item) {
                        str += "[" + i + "]: " + item + "\n";
                    });
                    alert(str);
                }
                function Delete(data, callback)
                {

                    $.alerts.okButton = "Ok";
                    $.alerts.cancelButton = "Cancel";
                    hiConfirm("Are You Sure to Delete this NIO", 'Confirm', function(r) {
                        r && callback(0);
                    });
                }
                function wtd(p)
                {
                    if (p && p.datestrshow) {
                        $("#txtdatetimeshow").text(p.datestrshow);
                    }
                    $("#caltoolbar div.fcurrent").each(function() {
                        $(this).removeClass("fcurrent");
                    })
                    $("#showdaybtn").addClass("fcurrent");
                }
                //to show day view

                //to show month view
                $("#showmonthbtn").click(function(e) {
                    //document.location.href="#month";
                    $("#caltoolbar div.fcurrent").each(function() {
                        $(this).removeClass("fcurrent");
                    })
                    $(this).addClass("fcurrent");
                    var p = $("#gridcontainer").swtichView("month").BcalGetOp();
                    if (p && p.datestrshow) {
                        $("#txtdatetimeshow").text(p.datestrshow);
                    }
                });

                $("#showreflashbtn").click(function(e) {
                    $("#gridcontainer").reload();
                });

                //Add a new event
                $("#faddbtn").click(function(e) {
                    var url = "edit.php";
                    OpenModelWindow(url, {width: 500, height: 400, caption: "Edit The NIO"});
                });
                //go to today
                $("#showtodaybtn").click(function(e) {
                    var p = $("#gridcontainer").gotoDate().BcalGetOp();
                    if (p && p.datestrshow) {
                        $("#txtdatetimeshow").text(p.datestrshow);
                    }


                });
                //previous date range
                $("#sfprevbtn").click(function(e) {
                    var p = $("#gridcontainer").previousRange().BcalGetOp();
                    if (p && p.datestrshow) {
                        $("#txtdatetimeshow").text(p.datestrshow);
                    }

                });
                //next date range
                $("#sfnextbtn").click(function(e) {
                    var p = $("#gridcontainer").nextRange().BcalGetOp();
                    if (p && p.datestrshow) {
                        $("#txtdatetimeshow").text(p.datestrshow);
                    }
                });



                var arrT = [];
                var tt = "{0}:{1}";
                for (var i = 0; i < 24; i++) {
                    arrT.push({text: StrFormat(tt, [i >= 10 ? i : "0" + i, "00"])}, {text: StrFormat(tt, [i >= 10 ? i : "0" + i, "30"])});
                }

                $("#stparttime").val("09:00").show();
                $("#etparttime").val("17:00").show();


            });


        </script>    
        <script>
            $(document).ready(function() {


            });
        </script>


    </body>
</html>