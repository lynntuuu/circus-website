// JavaScript Document
$(document).ready(function(){
	
	$(window).resize(function(){
		location.reload();
	});
	$(".menu").click(function(){
		$("nav").slideToggle();
	});
	
	//Fancybox group
	$(".fancybox").fancybox({
		openEffect:'none',
		closeEffect:'none'
	});
	
	
	//fancybox single
	$("#s2").fancybox({
		openEffect:'elastic', //彈出
		closeEffect:'elastic',
		
		helpers:{
			title:{
				type:'float' // 標題位置float/inside/outside/over
			}
		}
	});
	
	
	//fancybox single
	$("#s3").fancybox({
		openEffect:'elastic', //彈出
		closeEffect:'elastic',
		
		helpers:{
			title:{
				type:'over' // 標題位置float/inside/outside/over
			}
		}
	});
	
	
	//fancybox single
	$("#s4").fancybox({
		openEffect:'elastic', //彈出
		closeEffect:'elastic',
		
		helpers:{
			title:{
				type:'over' // 標題位置float/inside/outside/over
			}
		}
	});
});