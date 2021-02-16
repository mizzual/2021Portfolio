$(document).ready(function(){

    //처음페이지 
    $(".main a").on("mouseenter",function(){
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        
    });
    $(".main a").on("click",function(){
        $(this).addClass("go");
        $(this).siblings().removeClass("on");
        $(this).siblings().addClass("other");
        
    });
    //전체메뉴 
    $(".menu").on("click",function(){
        $(this).toggleClass("on");
        $(".dim_menu").toggleClass("on");
    });
    $(".dim_menu>ul>li").on("click",function(){
        var idx = $(this).index();
        swiperH.slideTo(idx);
        $(".dim_menu").removeClass("on");
        $(".menu").removeClass("on");
    });
    //About me 에서 탭메뉴 
    
    $(".tabs ul>li>a").on("click",function(){
        var idx = $(this).parent("li").index();
        console.log(idx);
        
        $(this).parent("li").addClass("on");
        $(this).parent("li").siblings().removeClass("on");
        $(this).parents(".tabs").children("div").eq(idx).addClass("on");
        $(this).parents(".tabs").children("div").eq(idx).siblings().removeClass("on");
    });
    //메인페이지
    particlesJS("particles-js", {"particles":{"number":{"value":71,"density":{"enable":true,"value_area":473.4885849793636}},"color":{"value":"#ffffff"},"shape":{"type":"edge","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
    
    //포토폴리오 
$(".port_menu li").on("click",function(){
    $(this).addClass("on");
    $(this).siblings().removeClass("on");
    
    var na = $(this).attr("name");
    $(".port_img li").each(function(){
        $(this).removeClass("on");
        
        var cls1 = $(this).attr("class");
        var cls = cls1.slice(0,3) //slice에서 0이상 3미만 글자를 잘라준다. 
        var cls2 = cls1.slice(4,7)
        
        if( na == cls){

            if ( cls == "web" ){
                $(".port_img li").removeClass("on");
                $(".web").addClass("on");
            }else if( cls == "mob"){
                $(".port_img li").removeClass("on");
                $(".mob").addClass("on");
            }else if( cls == "res"){
                $(".port_img li").removeClass("on");
                $(".res").addClass("on");
            } 
        }else if( na == cls2){
            console.log(cls2);
            $(".port_img li").removeClass("on");
            $(".port_img .all").addClass("on");
        }

    });
           
});
    //왼쪽 상단 전체메뉴 
    

});