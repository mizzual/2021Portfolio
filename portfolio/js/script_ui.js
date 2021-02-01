$(function(){
    $("#fullpage").fullpage({
        sectionsColor:['#b45151', '#eee', '#333', '#e2dcd4', "#555"],
        navigation: true,
        navigationTooltips:["MAIN","PROFILE","SKILLS","PORTFOLIO","CONTACT"],
        anchors:["main","profile","skills","portfolio","contact"],
        scrollingSpeed:1000
    });
});