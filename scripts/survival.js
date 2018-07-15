var timerLabel = document.querySelector(".timer");
var urgent_message = document.querySelector(".urgent p");
var daily_message = document.querySelector(".daily p");
var food_label = document.querySelector("li:nth-child(1)");
var supplies_label = document.querySelector("li:nth-child(2)");
var member_label = document.querySelector("li:nth-child(3)");
var food = 5;
var supplies = 5;
var food_cost = 3;
var member_food = 1;
var member_supplies = 0;
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
daily_message.innerHTML = weather["weather"];
member_label.innerHTML = "Members (" + (member_food + member_supplies) + ")";
setInterval(function(){
	food_cost = 3 + member_food + member_supplies;
	time = time + 1;
	timerLabel.innerHTML = time + " hrs";
	food += weather["food"] * member_food;
	supplies += weather["supplies"] * member_supplies;
	food_label.innerHTML = "Food: " + food;
	supplies_label.innerHTML = "Supplies: " + supplies;
	member_label.innerHTML = "Members (" + (member_food + member_supplies) + ")";
	if (time % 24 == 0){
		weather = getRandomWeather();
		daily_message.innerHTML = weather["weather"];
		food = food - food_cost;
	}
	if (Math.random() > 0.9){
		urgent_message.innerHTML = "";
	}
}, 30000);

function getRandomWeather() {
	return weathers[Math.floor(Math.random() * weathers.length)];
}
