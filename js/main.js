


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

});