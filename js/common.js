$(function(){


//// fade ////
$(".fade").hover(function(){
	$(this).fadeTo(100, 0.5);
},function(){
	$(this).fadeTo(300, 1.0);
});




//// pageScroll ////
$('[href^="#"]').click(function(e) {
var id = $(this).attr("href");
var offset = 0;
var target = $(id).offset().top - offset;
		$('html, body').animate({
		scrollTop:target
		}, 500);
		e.preventDefault();
});

});

