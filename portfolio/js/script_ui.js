$(function(){
    $("#fullpage").fullpage({
        sectionsColor:['#b45151', '#b6e4fe', '#b6e4fe', '#e2dcd4', "#555"],
        navigation: true,
        navigationTooltips:["MAIN","PROFILE","SKILLS","PORTFOLIO","CONTACT"],
        anchors:["main","profile","skills","portfolio","contact"],
        scrollingSpeed:1000
    });
});