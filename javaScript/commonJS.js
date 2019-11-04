$(document).ready(function(){
    $(".sidenav_container").hide();
   let sidenav=$(".sidenav_container");
   let close_btn=$(".sidenav_close");
    $(".sidenav_trigger").click(function(){
       sidenav.show();
    })  
    
    close_btn.click(function(){
        sidenav.hide();
    })

    $(window).scroll(function(){
        if($(document).scrollTop()> 300)
        {
            // $('.navbar_style').fadeIn($('.navbar_style').addClass("bg-dark"),200)
           
            $('.navbar_style').addClass("bg-dark");
        }
        else{

            $('.navbar_style').removeClass("bg-dark");

        }
    })

    //LOGIN POPUP

    $(".login_btn").click(function(){
        // $(".loginModal").show();
        $(".loginModal").css("visibility","visible");
        console.log("LoginBtnClicked");
    })
    $(".loginModalCloseBtn").click(function(){
        // $(".loginModal").hide();
        $(".loginModal").css("visibility","hidden");

    })


})

