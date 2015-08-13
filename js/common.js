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



//////////////////////////////////////////////
//   SP/PC
//////////////////////////////////////////////
function windowResize(){
	var w = $(window).width();
	var x = 667;
	var timer = false;
	if (w <= x) { /*SP*/



	} else { /*PC*/


	}
	//リサイズ終了時のみリロードする
	if(event.type === 'resize') {
		if (timer !== false) {
			clearTimeout(timer);
		}
			timer = setTimeout(function() {
			location.href = location.href;
		}, 200);
	}

}
$(window).resize(windowResize);
$(window).on('load',windowResize);
//////////////////////////////////////////////