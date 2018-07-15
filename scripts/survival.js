var timerLabel = document.querySelector(".timer");
var urgent_message = document.querySelector(".urgent p");
var daily_message = document.querySelector(".daily p");
var food_label = document.querySelector("li:nth-child(1)");
var supplies_label = document.querySelector("li:nth-child(2)");
var food = 5;
var supplies = 5;
var food_cost = 3;
var nice_weather = {
	"weather" : "It is a nice day.",
	"food" : 2,
	"supplies" : 2
};
var cold_weather = {
	"weather" : "It is a bit chilly. The breeze is strong.",
	"food" : 1,
	"supplies" : 2
};
var freezing_weather = {
	"weather" : "It is freezing. Best stay inside.",
	"food" : 0,
	"supplies" : 1
};
var raining_weather = {
	"weather" : "It is raining. You could get sick.",
	"food" : 1,
	"supplies" : 0
};
var hot_weather = {
	"weather" : "It is very hot. You are light-headed.",
	"food" : 1,
	"supplies" : 1
};
var weathers = [nice_weather, cold_weather, freezing_weather, raining_weather, hot_weather];
var time = 1;
var weather = weathers[0];
timerLabel.innerHTML = time + " hr";
food_label.innerHTML = "Food: " + food;
supplies_label.innerHTML = "Supplies: " + supplies;
setInterval(function(){
	time = time + 1;
	timerLabel.innerHTML = time + " hrs";
	food += weather["food"];
	supplies += weather["supplies"];
	food_label.innerHTML = "Food: " + food;
	supplies_label.innerHTML = "Supplies: " + supplies;
	if (time % 24 == 0){
		weather = getRandomWeather();
		daily_message.innerHTML = weather["weather"];
		food = food - food_cost;
	}
}, 30000);

if (daily_message.innerHTML == ""){
	document.querySelector(".daily").classList.add("hidden");
}
if (urgent_message.innerHTML == ""){
	document.querySelector(".urgent").classList.add("hidden");
}
function getRandomWeather() {
	return weathers[Math.floor(Math.random() * weathers.length)];
}
