function menu(mu){
  $(mu).toggleClass("change");
  $(".nav").toggleClass("not_active");
  if ($(mu).hasClass("change")){
    $("html").css({"margin" : "0", "height" : "100%", "overflow-y" : "hidden"});
  } else {
      $("html").css({"margin" : "auto", "height" : "auto", "overflow-y" : "scroll"});
  }
}
$(document).ready(function(){
	$(".title").addClass("load");
});
