$(function(){
// visual banner
    $(".section.visual > ul").bxSlider({
        auto: true,
        pause: 5000,
        speed: 1000,
        controls: true,
        onSlideAfter:function
            ($slideElement, oldIndex, newIndex){
                $(".section.visual ul > li").removeClass("on");
                $slideElement.addClass("on");
            }
    });

});