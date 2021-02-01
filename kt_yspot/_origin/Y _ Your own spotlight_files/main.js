$(function(){
	// About
	/*
	$(".main_about_wrap > h3").on("click", function(){
		var ts = $(this);
		if(!ts.hasClass("active")){
			$(".main_about_wrap h3.active").removeClass("active");
			$(".tit_wrap.active").removeClass("active");
			ts.addClass("active");
		$(".main_about_wrap  > div:visible").hide();
			ts.next("div").show();
		}
	});	
	*/

	$(".main_about_wrap > h3").on("click", function(){
		var ts = $(this);
		var idxNum = $(".main_about_wrap > h3").index(ts);
		var titNum = $(".tit_wrap").index(ts);
		if(!ts.hasClass("active")){
			$(".main_about_wrap > h3").filter(".active").removeClass("active");
			ts.addClass("active");
			$(".tit_wrap.active").removeClass("active");
			
		$(".main_about_wrap > div").filter(".active").removeClass("active");
		$(".main_about_wrap > div").eq(idxNum).addClass("active");
		$(".tit_wrap").eq(idxNum).addClass("active");
		}
	});
	/*
	$('.dep1_jump[href*=\\#]').on('click',function(e) {

		var target = this.hash;
		var $target = $(target);
		var targetname = target.slice(1, target.length);

		if(document.getElementById(targetname) != null) {
				 e.preventDefault();
		}
		$('html, body').stop().animate({
				'scrollTop': $target.offset().top - $('#header').outerHeight()

		}, 900, 'swing', function () {
				window.location.hash = target  - $('#header').outerHeight();
		});
	});
	*/
// 메인메뉴
	$('.dep1_jump').click(function(e){
		e.preventDefault();
		$('dep1_jump').filter('.active').removeClass('active');
		$(this).addClass('active');
		$('html,body').animate({scrollTop:$(this.hash).offset().top - $('#header').outerHeight()}, 500);
	});

	$( window ).resize(function() {
		var ch = document.documentElement.clientHeight;
		$("#mv").css({height: ch + "px"});
	});
	$( window ).trigger("resize");
});