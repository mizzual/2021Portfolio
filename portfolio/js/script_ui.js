$(function(){
   init();
});
function init(){
    // 기본플러그인
    $("#fullpage").fullpage({
        sectionsColor:['#b45151', '#b6e4fe', '#b6e4fe', '#e2dcd4', "#555"],
        navigation: true,
        navigationTooltips:["MAIN","PROFILE","SKILLS","PORTFOLIO","CONTACT"],
        anchors:["main","profile","skills","portfolio","contact"],
        scrollingSpeed:1000
    });
    
    // SKILLS
    var _waveId; //카운팅 효과 시 사용하는 setInterval 저장변수
    $("#section2 .wrap-link .unit > a").mouseover(function(){
        var _idx = $(this).parent().index();
        var _pos = [85, 65, 95, 90];
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
        console.log(_val);
    }
    // SKILLS - num 카운팅 멈춤
    $("#section2 .wrap-wave .unit").on("transitionend",function(){
        // console.log("end");
        clearInterval(_waveId);

    })

    // PORTFOLIO
    $("section3 .wrap-photo > ul").slick();
}