var timerLabel = document.querySelector(".timer");
var time = 0;
setInterval(function(){
	time = time + 1;
	timerLabel.innerHTML = time + " hrs";
}, 3000);
