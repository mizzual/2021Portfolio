var topTrigger = function(){
	var winWidth = $(window).width();
	var winScrTop = $(window).scrollTop();
	if (winScrTop > 120){
		$('#top_trigger').fadeIn();
		$('#fixed_baner').fadeIn();
	} else {
		$('#top_trigger').fadeOut();
		$('#fixed_baner').fadeOut();
	}
	if (winScrTop > 80){
		$('#header').addClass( 'stiky' );
	} else {
		$('#header').removeClass( 'stiky' );
	}
}


$(function(){

	

	
	$('#top_trigger').click(function(){
		$('html,body').animate({scrollTop:0},1000)
	});

	;
	
	$(window).on("resize", function(){
		var headerHeight = $('#header').outerHeight()
		var winWidth = $(window).width();
		//$('#body_wrap').css({'padding-top':headerHeight + 'px'});
	});
	$(window).trigger("resize");  

	$(document).ready(function(){
		topTrigger();
	});
	$(window).scroll(function(){
		topTrigger();
	});
	
	$('.ban_on_off').on('click', function(){
		if($('#fixed_baner').hasClass('active')){
			$('#fixed_baner').removeClass('active');
			$('#fixed_baner').stop().animate({'bottom':'-150px'},100);
			$('#fixed_baner ul').fadeOut(150);
			$('#footer').css({'padding-bottom':'0'});
		} else {
			$('#fixed_baner').addClass('active');
			$('#fixed_baner').stop().animate({'bottom':'0'},100);
			$('#fixed_baner ul').fadeIn(150);
			$('#footer').css({'padding-bottom':'120px'});
		}
	});
	
	$('.ani_top').scrollex({
		top:'15%',
		bottom:'-100000px',
		enter: function(){
			$(this).addClass('move');
		}
	});
	$('.ani_left').scrollex({
		top:'15%',
		bottom:'-100000px',
		enter: function(){
			$(this).addClass('move');
		}
	});
	$('.ani_right').scrollex({
		top:'15%',
		bottom:'-100000px',
		enter: function(){
			$(this).addClass('move');
		}
	});
});