$(document).ready(function(){
	$(".top h1").addClass("load");
	var sub = $(".image");
	$(sub.find("a")).hover( function(){
		$($(this).find("h3")).stop().animate({ letterSpacing: '5px' }, 500);
		//$(this).stop().animate({opacity: 0}, 700);
	}, function(){
		$($(this).find("h3")).stop().animate({ letterSpacing: '0px' }, 500);
		//$(this).stop().animate({opacity: 1}, 700);
	}
	);
});
