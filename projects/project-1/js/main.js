$(function(){
	$('.header__burger').click(function() {
		$('.header__burger').toggleClass('open-menu');
		$('.menu').toggleClass('open-menu');
		/*$('.header__btn').toggleClass('open-menu');*/
		$('.header__content').toggleClass('mrgtp')
	});

	$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});

});
