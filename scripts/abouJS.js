function add_item(title, para, special, id){
	return "<div id='" + id + "' class='item'> <h4>" + title + "</h4><p>" + para + "</p>" + special + "</div><hr>";
}
$(document).ready(function(){
	var edu = "<ul><li><h5>Computer Science</h5></li><li><p>Intro to CS: A</p></li></ul><ul><li><h5>Math</h5></li><li><p>Integral Calculus: A+</p></li><li><p>Multivariable Calculus: A</p></li></ul><ul><li><h5>Philosophy</h5></li><li><p>Philosophy of Science: A-</p></li></ul>";
	var lang = "<ul class='lang'><li><p>Java  &#x26AB   &#x26AB   &#x26AB   &#x26AB &#x26AA</p></li><li><p>JavaScript  &#x26AB   &#x26AB   &#x26AB   &#x26AB &#x26AA</p></li><li><p>Python  &#x26AB   &#x26AB   &#x26AB   &#x26AA &#x26AA</p></li><li><p>HTML\\CSS  &#x26AB   &#x26AB   &#x26AB   &#x26AA &#x26AA</p></li><li><p>PHP  &#x26AB   &#x26AB   &#x26AA   &#x26AA &#x26AA</p></li><li><p>C++  &#x26AB   &#x26AB   &#x26AA   &#x26AA &#x26AA</p></li></ul>";
	var cont = "<ul class='social'><li><a href='mailto:sher.shah010@berkeley.edu'>sher.shah010@berkeley.edu</a></li><li><a href='https://www.linkedin.com/in/sher-s-931286122/'>LinkedIn</a></li><li><a href='img/SherShah_resume.pdf'>resume</a><li></ul>";
	var comp = "<ul class='comp'><li>Stellar Xplorer Space Competition - 1st place</li><li>FRC Robotics Regional Competition - 1st place</li><li>Intel ISEF Science Fair - 3rd place</li></ul>";
	var items = [add_item("EDUCATION", "My four year college plan is to major in Computer Science with a minor in Math and Philosophy. Here is a list of related courses that I have taken:", edu, "a"),
							add_item("LANGUAGES", "Over the years, I have picked up many programming languages. Here is a list of them:", lang, "b"),
							add_item("COMPETITIONS", "One hobby of mine is take part in compeitions. I find the challenges engaging and rewarding. Here are the compeitions I have been involved in:", comp, "c"),
							add_item("CONTACT", "A list of ways you can contact me:", cont, "d")];
	for (var i = 0; i < items.length; i++){
		$('.content').append(items[i]);
	}
	$(".wrapper").addClass("load");
});

function menu(mu){
  $(mu).toggleClass("change");
  $(".nave").toggleClass("not_active");
  if ($(mu).hasClass("change")){
    $("html").css({"margin" : "0", "height" : "100%", "overflow" : "hidden"});
  } else {
      $("html").css({"margin" : "auto", "height" : "auto", "overflow" : "scroll"});
  }
}
