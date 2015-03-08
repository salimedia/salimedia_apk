// Loading Screen

$(window).load(function(){
	$("body").css("overflow","auto");
	$(".loading-page h1").fadeOut(400,function(){
		$(this).parent().fadeOut(400,function(){
			$(this).remove();
		});
	});
})


// Nice Scroll Effect
$(document).ready(

  function() { 

    $("html").niceScroll();

  }

);