	$(document).ready(function (){
		if($(window).width() <768) {
		$("h1").css("color", "red");
		}else{
		$("h1").css("color", "blue");            
	}
	console.log($(window).width());
	//윈도우 리사이즈 이벤트
	$(window).on("resize", function(){
		if($(window).width() <768) {
		$("h1").css("color", "red");
		}else{
		$("h1").css("color", "blue");
	}
	});
	
		
	});
	// 다큐먼트가 레디가 됐냐 ( 다 읽었냐 읽었으면 해라. 펑션하고 할일을 씀)
	
	var num1 =10;
	console.log(num1);
	
	if(num1 <11){
		console.log("11보다 작다");
	}else{
		console.log("11보다 크다");
	}