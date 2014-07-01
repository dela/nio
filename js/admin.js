$(document).ready(function() {
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
      
});
    
