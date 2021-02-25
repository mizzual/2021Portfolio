$(document).ready(function(){
    //  a href='#' 클릭 무시 스크립트
    // $('a[href="#"]').click(function(ignore) {
    //     ignore.preventDefault();
    // });
    $('.event-wrapper').bxSlider({
        auto: true,
        pause: 4000
    });

});


// $(function(){
//    
//     //main-slider 스크립트
//     $('.main-slider').bxSlider({
//         auto: true,
//         pause:7000,
//     });
//     $('.br-event').bxSlider({
//         auto:true,
//         pager: false,
//         controls: false,
//         minSlides: 4,
//         maxSlides: 4,
//         moveSlides: 1,
//         pause: 3000,
//         slideWidth: 300,
//         slideMargin: 20,
//         autoHover:true,
//     });
//     $('.insta-slider').bxSlider({
//         auto: true,
//         pager: false,
//         pause:7000,
//         minSlides: 5,
//         maxSlides: 5,
//         slideWidth: 300,
//         slideMargin: 5
//     });
// });