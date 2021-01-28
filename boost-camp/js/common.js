// top-button
$(document).ready(function(){
    // hide #toTop first
    $("#top-btn").hide();
  
    // fade in #toTop
    $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('#top-btn').fadeIn();
          } else {
              $('#top-btn').fadeOut();
          }
      });
      // scroll body to 0px on click
      $('#top-btn').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
    });
  });

// gnbMenu
var myMenuClose = function(){
    $("#gnbMenu").hide();
    $("#back").hide();
    $("#menuClose").hide();
}

$(document).ready(function(){

    $(window).on("resize", function(){
        console.log("리사이즈");
        if($(window).width()>768){
            $("#gnbMenu").show();
        }else{
            myMenuClose();
        }
    });

    $("#menuView").on("click", function(){
        console.log("click");
        // $("#gnbMenu").css("display", "block");
        // $("#back").css("display", "block");
        // $("#menuClose").css("display", "block");
        // $("#gnbMenu").slideDown("slow");
        // $("#gnbMenu").animate({width: "60%"});
        // $("#gnbMenu").css("padding", "80px 25px 25px 25px");
        $("#gnbMenu").show();
        $("#back").show();
        $("#menuClose").show();
    });

    $("#menuClose").on("click", function(){
        // console.log("click");
        // $("#gnbMenu").css("display", "none");
        // $("#back").css("display", "none");
        // $("#menuClose").css("display", "none");
        // $("#gnbMenu").slideUp("fast");
        // $("#gnbMenu").animate({width: "0%"});
        // $("#gnbMenu").css("padding", "80px 0px 25px 0px");
        $("#gnbMenu").hide();
        $("#back").hide();
        $("#menuClose").hide();
    });
});

    // a href='#' 클릭 무시 스크립트
$(".br-main").ready(function() {
    $('a[href="#"]').click(function(ignore) {
        ignore.preventDefault();
    });
});
