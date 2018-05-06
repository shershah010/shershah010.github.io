function menu(mu){
  $(mu).toggleClass("change");
  $(".nav").toggleClass("not_active");
  if ($(mu).hasClass("change")){
    $("html").css({"margin" : "0", "height" : "100%", "overflow" : "hidden"});
  } else {
      $("html").css({"margin" : "auto", "height" : "auto", "overflow" : "scroll"});
  }
}
$(document).ready(function(){
	$(".title").addClass("load");
});
