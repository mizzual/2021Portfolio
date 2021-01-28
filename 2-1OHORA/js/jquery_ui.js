// 비주얼 슬라이드 쿼리
$(".visual").ready(function(){
    var swiper = new Swiper('.visual', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay:{
            delay:5000,
            disableOnInteraction: false,
        }
      });
});

// 신상 슬라이드 쿼리
// $(".new").ready(function(){ 
//     var swiper = new Swiper('.new',{ 
//         slidesPerView: 3,
//       spaceBetween: 30,
//       slidesPerGroup: 3,
//       loop: true,
//       loopFillGroupWithBlank: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
// });
// });





// 오호라사이트발췌js

    
jQuery1_11_2(document).ready(function(){
        

  //메인 이벤트 슬라이드 
  var Eventbanner = $('.SP_eventBanner_wrap').length;
  if (Eventbanner > 0) {
      $('.SP_eventBanner_wrap').addClass('swiper-container');
      $('.SP_eventBanner_wrap .SP_eventBnList_wrap').addClass('swiper-wrapper');
      $('.SP_eventBanner_wrap .SP_eventBn_li').addClass('swiper-slide');

      var Eventswiper = new Swiper('.SP_eventBanner_wrap.swiper-container', {
          slidesPerView: 'auto',
          loop: true,
          loopFillGroupWithBlank: true,
          autoplay: {
              delay: 2500,
          },
         pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
      });
  }

});
