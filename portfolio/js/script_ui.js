$(function(){
   init();
});
function init(){
    // 기본플러그인
    $("#fullpage").fullpage({
        sectionsColor:['#b45151', '#b6e4fe', '#b6e4fe', '#e2dcd4', "#e2dcd4"],
        navigation: true,
        navigationTooltips:["MAIN","PROFILE","SKILLS","PORTFOLIO","CONTACT"],
        anchors:["main","profile","skills","portfolio","contact"],
        scrollingSpeed:1000
    });
    // PROFILE
    // $(".sec1-nav ul > li > a").on("click",function(){
    //     var idx = $(this).parent("li").index();
    //     console.log(idx);
        
    //     $(this).parent("li").addClass("on");
    //     $(this).parent("li").siblings().removeClass("on");
    //     $(this).parents(".sec1-nav").children("div").eq(idx).addClass("on");
    //     $(this).parents(".sec1-nav").children("div").eq(idx).siblings().removeClass("on");
    // });

    // SKILLS
    var _waveId; //카운팅 효과 시 사용하는 setInterval 저장변수
    $("#section2 .wrap-link .unit > a").mouseover(function(){
        var _idx = $(this).parent().index();
        var _pos = [85, 65, 100, 90];
        var _rev = 100-_pos[_idx];
        console.log(100-_pos[_idx]);
        $("#section2 .wrap-wave .unit").css("transform","translateY("+_rev+"%)");
        clearInterval(_waveId); //setInterval의 비정상적 호출을 막기 위한 조치
        _waveId = setInterval(changeNum,10) //0.01s 반복
    }).mouseout(function(){
        $("#section2 .wrap-wave .unit").css("transform","translateY(95%)");
    });
    // SKILLS - num 카운팅
    function changeNum(){
        var _num = $("#section2 .wrap-wave .unit").css('transform').split(",")[5];
        _num = _num.replace(")","");
        var _th = $("#section2 .wrap-wave").height();
        var _val = 100 - Math.round(_num / _th *100);
        $("#section2 .wrap-wave .unit .num > strong").text(_val);
    }
    // SKILLS - num 카운팅 멈춤
    $("#section2 .wrap-wave .unit").on("transitionend",function(){
        clearInterval(_waveId);

    })

    // PORTFOLIO
    $("#section3 .wrap-photo > ul").slick({
        centerMode: true,
        dots:false,
        arrows: true,
        prevArrow:'.slick-prev',
        nextArrow:'.slick-next',
        slidesToShow: 1,
        slidesToScroll:1,
        variableWidth:true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000
    }).on("afterChange",function(event, slick, current){
        $("#section3 .wrap-txt > ul > li").removeClass("select"); //초기화
        $("#section3 .wrap-txt > ul > li").eq(current).addClass("select");
    })
    // PORTFOLIO - cursor 커스터마이징
    document.addEventListener("mousemove",function(event){
        var cursorW = $("#section3 .wrap-photo .cursor").width() / 2;
        var cursorH = $("#section3 .wrap-photo .cursor").height() / 2;
        var mouseX = event.pageX;
        var mouseY = event.pageY;
        $("#section3 .wrap-photo .cursor").css({"top":mouseY - cursorH, "left":mouseX- cursorW})
    })

    // CONTACT
    $(document).ready(function() {
		emailjs.init("user_Ke4lV5mxOpTcwiOkDkLOC");
        $('input[name=submit]').click(function(){       	 
          
          var templateParams = {	
          //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성
                name: $('input[name=name]').val(),
                email : $('input[name=email]').val(),
                message : $('textarea[name=message]').val()
           				};
                                    	
         emailjs.send('service_0i08kep','template_cjvxks8', templateParams)
         	    .then(function(response) {
         	       console.log('SUCCESS!', response.status, response.text);
                    alert("이메일이 보내졌습니다! ٩( ᐛ )و");
         	    }, function(error) {
         	       console.log('FAILED...', error);
                    alert("이메일 전송에 실패했습니다..ಥ_ಥ");
         	    });
        });
	  });
      // CONTACT-submit 팝업
      function sub(){
          
      }

    $("#section4 .wrap-input > form .group > input").on("textInput",function(event){
        var _typo = event.originalEvent.data;
        var _r = (Math.floor(Math.random()*256));
        var _g = (Math.floor(Math.random()*256));
        var _b = (Math.floor(Math.random()*256));
        var _rgb = "rgb("+_r+","+_g+","+_b+")"
        $("<span class='ani-0' style='color:"+_rgb+"'>" + _typo + "</span>")
        .appendTo($("#section4 .wrap-typo .wrap-typo-inner"))
        .on("animationend",function(){
            $(this).remove();
        })

    })
}