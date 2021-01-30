$(function(){
    init();
});
    // 풀스크린 플러그인
    $function(){
        $("#fullpage").fullpage({
            sectionsColor:['#999','#eaeef2',"#b6e4fe","#e2dcd4","#666"],
            navigation:true,
            navigationTooltips:["MAIN","PROFILE","SKILL","PORTFOLIO","CONTACT"],
            anchors:["main","profile","skill","portfolio","contact"],
            scrollingSpeed:1500
        });

        // main
        $("section0 .wrap-link .unit > a").mouseover(function(){
           var _idx = $(this).parent().index()
           var _class = "select-" + (_idx + 1);
           $("#section0 .wrap-bg").removeClass("select-1 select-2 select-3")

           $("#section0 .wrap-bg").addClass(_class);

        });
        $("#section0 .wrap-link .unit > a").mouseout(function(){
            $("section0 .wrap-bg").removeClass("section-1 section-2 section-3")
        });
        // 패럴럭스 배경효과
        $("section0").parallax({
            imageSrc:"img"
        });
    }