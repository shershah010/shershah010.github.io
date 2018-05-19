/* Starts The Slide Up Animation */
$(document).ready(function(){
	$(".wrap").addClass("load");
});

/* Adds The Class Attributes To Switch From A Page To The Menu And Vice Versa */
function menu(mu){
  $(mu).toggleClass("change");
  $(".nav").toggleClass("not_active");
  if ($(mu).hasClass("change")){
    $("html").css({"margin" : "0", "height" : "100%", "overflow-y" : "hidden"});
  } else {
      $("html").css({"margin" : "auto", "height" : "auto", "overflow-y" : "scroll"});
  }
}
