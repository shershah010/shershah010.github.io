var timerLabel = document.querySelector(".timer");
var urgent_message = document.querySelector(".urgent p");
var daily_message = document.querySelector(".daily p");
var time = 1;
timerLabel.innerHTML = time + " hr";
setInterval(function(){
	time = time + 1;
	timerLabel.innerHTML = time + " hrs";
}, 30000);

if (daily_message.innerHTML == ""){
	document.querySelector(".daily").classList.add("hidden");
}
if (urgent_message.innerHTML == ""){
	document.querySelector(".urgent").classList.add("hidden");
}
