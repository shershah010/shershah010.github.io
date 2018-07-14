var timerLabel = document.querySelector(".timer");
var time = 1;
timerLabel.innerHTML = time + " hr";
setInterval(function(){
	time = time + 1;
	timerLabel.innerHTML = time + " hrs";
}, 30000);
