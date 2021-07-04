$(function(){
	$('.header__burger').click(function() {
		$('.header__burger').toggleClass('open-menu');
		$('.menu').toggleClass('open-menu');
	});
});