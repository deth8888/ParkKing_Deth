$(document).ready(function(e) {
    $(window).scroll(function(){
		if ($(this).scrollTop() > 200){
			$('.go-top').fadeIn(200);
			
			} else{
				$('.go-top').fadeOut(200);
				}		
		
		});
	//scroll top
	
	$('.go-top').click(function(event){
		event.preventDefault();
		
		$('html,body').animate({scrollTop:0}, 300);
	});
	
	
	});

// JavaScript Document