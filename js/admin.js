$(document).ready(function() {
    
    var nio=[];
    var selectedNIO=0;
    var nioID=1;
    var nioName="";
    
    $(".titleTd").click(function() {
        $(".titleTd").addClass('template-darkBack');
        $(".titleTd").removeClass('template-textWhite');
        $(".titleTd").addClass('template-lightColor');
        $(this).removeClass('template-darkBack');
        $(this).addClass('template-lightBack');
        $(this).removeClass('template-lightColor');
        $(this).addClass('template-textWhite');
    });
        
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
    $("#settings-general-tab").removeClass('template-darkBack');
    $("#settings-general-tab").addClass('template-textWhite');
    $("#settings-general-tab").addClass('template-lightBack');  
   
    
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
   
    $(".nio-reasons-box").mCustomScrollbar({
        theme:"dark"
    });
    
    //-----------------------------NIO TAB------------------------------------
    //------ structure ---------
    //{
    //nioID             : 1
    //nioName           : "Forgot ID Card"
    //nioDepartment     : []
    //nioEmployee       : []
    //}
    //
    
    function loadDepartment(nioID){
        $.each(nio,function(j){
            if(nio[j].nioID==nioID){
                $("#nio-reason-department ul").empty();
                $.each(nio[j].nioDepartment,function(i){
                    $("#nio-reason-department ul").append("<li class=\"nio-reason-department\"><table><tr><td style=\"width: 75%\">"+nio[j].nioDepartment[i]+"</td><td><img src=\"images/close_graph_black.png\"></td></tr></table></li>");
                });
            } 
        });
    }
    
    function loadEmployee(nioID){
        $.each(nio,function(j){
            if(nio[j].nioID==nioID){
                $("#nio-reason-employee ul").empty();
                $.each(nio[j].nioEmployee,function(i){
                    $("#nio-reason-employee ul").append("<li class=\"nio-reason-department\"><table><tr><td style=\"width: 75%\">"+nio[j].nioEmployee[i]+"</td><td><img src=\"images/close_graph_black.png\"></td></tr></table></li>");
                });
            } 
        });
    }
    
    
    $("body").delegate(".nio-reason-type table tr td img","click",function(){       //Removing a reason
        $(this).parent().parent().parent().parent().parent().css({
            "margin":"0px",
            "padding":"0px"
        });
        $("#nio-reason-department ul").empty();
        $("#nio-reason-employee ul").empty();
        var id=$(this).parent().parent().parent().parent().parent().attr('id');
        $.each(nio,function(j){
            if(nio[j].nioID==id){
                nio.splice(j,1);
                return false;
            } 
        });
        $(this).parent().parent().parent().parent().empty();
        if(selectedNIO==id&&nio.length>0){
            $("#"+nio[0]['nioID']+' table tr td').css({
                'background-color':'lightgrey'
            });
            selectedNIO=nio[0].nioID;
            loadDepartment(selectedNIO);
            loadEmployee(selectedNIO);
        }
    });
    
    $("body").delegate(".nio-reason-employee table tr td img","click",function(){       //Removing a Employee
        $(this).parent().parent().parent().parent().parent().css({
            "margin":"0px",
            "padding":"0px"
        });
        var employeeID=$(this).parent().parent().parent().parent().parent().attr('id');
        $(this).parent().parent().parent().parent().empty();
        
        console.log(employeeID);
        $.each(nio,function(j){
            if(nio[j].nioID==selectedNIO){
                $.each(nio[j].nioEmployee,function(i){
                    if(nio[j].nioEmployee[i]==employeeID){
                        nio[j].nioEmployee.splice(i,1);
                        return false;
                    } 
                });
                return false;
            } 
        });
    });
    
    $("body").delegate(".nio-reason-department table tr td img","click",function(){       //Removing a Department
       
       $(this).parent().parent().parent().parent().parent().css({
            "margin":"0px",
            "padding":"0px"
        });
        var departmentID=$(this).parent().parent().parent().parent().parent().attr('id');
        $(this).parent().parent().parent().parent().empty();
        
        console.log(departmentID);
        $.each(nio,function(j){
            if(nio[j].nioID==selectedNIO){
                $.each(nio[j].nioDepartment,function(i){
                    if(nio[j].nioDepartment[i]==departmentID){
                        nio[j].nioDepartment.splice(i,1);
                        return false;
                    } 
                });
                return false;
            } 
        });
    });
 
    //--------------Selecting NIO--------------------
 
    $('body').delegate('.nio-reason-type table tr .niotype-clickable','click',function(){        //Selecting a reason
        $('.nio-reason-type table tr td').css({
            'background-color':'#e68a2e'
        });
        var id=$(this).parent().parent().parent().parent().attr('id');
        console.log(id);
        $("#"+id+' table tr td').css({
            'background-color':'lightgrey'
        }); 
        selectedNIO=id;
        loadDepartment(id);
        loadEmployee(id);
    });
    
    $("#nio-reason-to-add-button").click(function(){            //Adding a reason
        var nioReason=$("#nio-reason-to-add").val();
        if( nioReason.length){
            nio.push({
                'nioID':nioID,
                'nioName':nioReason,
                'nioDepartment':[],
                'nioEmployee':[]
            });
            console.log(nio);
            $("#nio-reason-to-add").val("");
            $("#nio-reason-type ul").append("<li class=\"nio-reason-type\" id="+nioID+"><table><tr><td class='niotype-clickable' style=\"width: 75%\">"+nioReason+"</td><td><img src=\"images/close_graph_black.png\"></td></tr></table></li>");
            $(".nio-reasons-box").mCustomScrollbar("update");
            $(".nio-reasons-box").mCustomScrollbar("scrollTo","h2:last",{       
                theme:"dark"
            });
            if(nio.length==1){
                $("#"+nioID+' table tr td').css({
                    'background-color':'lightgrey'
                }); 
                selectedNIO=nioID;
            }
            nioID++;
        }
    }); 
    
    
    $("#nio-department-to-add-button").click(function(){        //Adding Department
        var nioDepartment=$("#nio-department-to-add").val();
        if( nioDepartment.length&&nio.length>0){
            $("#nio-department-to-add").val("");
            $("#nio-reason-department ul").append("<li class=\"nio-reason-department\" id="+nioDepartment+"><table><tr><td style=\"width: 75%\">"+nioDepartment+"</td><td><img src=\"images/close_graph_black.png\"></td></tr></table></li>");
            $(".nio-reasons-box").mCustomScrollbar("update");
            $(".nio-reasons-box").mCustomScrollbar("scrollTo","h2:last",{       
                theme:"dark"
            });
            
            $.each(nio,function(j){
                if(nio[j].nioID==selectedNIO){
                    nio[j].nioDepartment.push(nioDepartment);
                } 
            });
        }
    }); 
    
    $("#nio-employee-to-add-button").click(function(){              //Adding Employee
        var employee=$("#nio-employee-to-add").val();
        if( employee.length&&nio.length>0){
            $("#nio-employee-to-add").val("");
            $("#nio-reason-employee ul").append("<li class=\"nio-reason-employee\" id="+employee+"><table><tr><td style=\"width: 75%\">"+employee+"</td><td><img src=\"images/close_graph_black.png\"></td></tr></table></li>");
            $(".nio-reasons-box").mCustomScrollbar("update");
            $(".nio-reasons-box").mCustomScrollbar("scrollTo","h2:last",{       
                theme:"dark"
            });
            
            $.each(nio,function(j){
                if(nio[j].nioID==selectedNIO){
                    nio[j].nioEmployee.push(employee);
                } 
            });
        }
    }); 
});