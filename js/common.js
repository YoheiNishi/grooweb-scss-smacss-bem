//////////////////////////////////////////////
//
//   Discriminate device
//
//////////////////////////////////////////////
var _ua = (function(u){
  return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) 
      || u.indexOf("ipad") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
      || u.indexOf("kindle") != -1
      || u.indexOf("silk") != -1
      || u.indexOf("playbook") != -1,
    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
      || u.indexOf("iphone") != -1
      || u.indexOf("ipod") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
      || u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());

if(_ua.Mobile || _ua.Tablet){ // mobile & tablet only

} else { // PC only
// reload after resize window
	var timer = false;
	$(window).resize(function() {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			location.reload();
		}, 200);
	});

}







//////////////////////////////////////////////
//
//   All device
//
//////////////////////////////////////////////
$(function(){

	//// fade ////
	$(".fade").hover(function(){
		$(this).fadeTo(100, 0.6);
	},function(){
		$(this).fadeTo(300, 1.0);
	});

});





//////////////////////////////////////////////
//
//   SP size only
//
//////////////////////////////////////////////
var breakpoint = 667 ;

function sp_size(){
	var w = $(window).width();
	if (w <= breakpoint) {





	}
}



//////////////////////////////////////////////
//
//   PC size only
//
//////////////////////////////////////////////

function pc_size(){
	var w = $(window).width();
	if (w > breakpoint) {



	}
}

//////////////////////////////////////////////
//
//   run
//
//////////////////////////////////////////////

$(window).resize(sp_size);
$(window).on('load',sp_size);
$(window).resize(pc_size);
$(window).on('load',pc_size);

