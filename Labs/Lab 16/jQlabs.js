$(document).ready(function(){
    $(".header").click(function(){
        $(".tovnav").hide(5000, function(){alert("The nav bar is gone!!!");
        });
    });

    $("#show").click(function(){
        $(".topnav").show(5000, function(){alert("The nav bar is back!!!")
        });
    });

    $("button").click(function(){
        /*$("#jquery").animate({
            left:'+=50px',
            opacity: '-=0.05',
            height: '+=10px',
            width: '+=50px'
        });*/
        var a = $("#jquery");
        a.animate({height: '+=10px', opacity: "-=0.5"}, "slow");
        a.animate({height: '-=5px', opacity: "+=0.3"}, "fast");
        a.animate({height: '+=110px', opacity: "-=0.1"}, "slow");
    });

    $("#p1").css("color","red").slideUp(2000).slideDown(2000);
});