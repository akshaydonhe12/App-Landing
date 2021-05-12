


$(document).ready(function(){
    
    /*-----------Navbar ------------- */

    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });


    /*-----------Video Popup ------------- */
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click",function(){
       if($(".video-popup").hasClass("open")){
        $(".video-popup").removeClass("open");
        $("#player-1").attr("src","");
       }
       else{
        $(".video-popup").addClass("open");
        if($("#player-1").attr("src") == ''){
            $("#player-1").attr("src",videoSrc);
        }
       }
    });


    /*-----------Owl-carousel ------------- */

    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
        
            },
            600:{
                items:2,
               
            },
            1000:{
                items:3,
                
            }
        }
    });

       /*-----------Screenshot-carousel ------------- */

       $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
        
            },
            600:{
                items:2,
               
            },
            1000:{
                items:4,
                
            }
        }
    });


    
       /*-----------testiomial-carousel ------------- */

       $('.testimonial-carousal').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
        
            },
            600:{
                items:2,
               
            },
            1000:{
                items:3,
                
            }
        }
    });



      
       /*-----------team-carousel ------------- */

       $('.team-carosual').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
        
            },
            600:{
                items:2,
               
            },
            1000:{
                items:3,
                
            }
        }
    });

    /*-----------ScrollIt-js ------------- */

    $.scrollIt({
        topOffset: -50   
    });


    /*-----------Navbar collap s ------------- */
    $(".nav-link").on("click",function(){
        $(".navbar-collapse").collapse("hide");
    });



    /*-----------Toggle Theme s ------------- */
    function toggleTheme(){
        if(localStorage.getItem("drive2park") !== null){
            if(localStorage.getItem("drivr2park") === "dark"){
                $("body").addClass("dark");
            }
            else{
                $("body").removeClass("dark");

            }
        }
        updateIcon();
    }
    toggleTheme();

    $(".toggle-theme").on("click",function(){
        $("body").toggleClass("dark");
        if($("body").hasclass("dark")){
            localStorage.setItem("drive2park", "dark");
        }
        else{
            localStorage.setItem("drive2park", "light");
            
        }
        updateIcon();

    })



    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".toogle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else{
            $(".toogle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }


});