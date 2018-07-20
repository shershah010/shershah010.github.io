var timerLabel = document.querySelector(".timer");
var urgent_message = document.querySelector(".urgent p");
var daily_message = document.querySelector(".daily p");
var food_label = document.querySelector("li:nth-child(1)");
var supplies_label = document.querySelector("li:nth-child(2)");
var member_label = document.querySelector("li:nth-child(4)");
var food = 5;
var supplies = 5;
var food_cost = 3;
var member_food = 1;
var member_supplies = 0;
var urgent_list = ["A wandering traveler has arrived. Do you let them in?"];
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
function add_detection(id){
	switch(id){
	case 1:
		member_food += 1;
		break;
	}
}
var urgent_fn;
setInterval(function(){
	food_cost = 3 * (member_food + member_supplies);
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
	if (Math.random() > 0.5){
		document.querySelector(".urgent").classList.remove("hidden");
		var rand = Math.floor(Math.random()*urgent_list.length);
		urgent_message.innerHTML = urgent_list[rand];
		urgent_fn = function(){ add_detection(rand); };
	} else {
		document.querySelector(".urgent").classList.add("hidden");
		urgent_message.innerHTML = "";
	}
}, 30000);

function getRandomWeather() {
	return weathers[Math.floor(Math.random() * weathers.length)];
}
function reject(){
	document.querySelector(".urgent").classList.add("hidden");
	urgent_message.innerHTML = "";
}
function confirm(){
	urgent_fn();
	reject();
}

var btn = document.querySelectorAll(".button");
btn[0].addEventListener("click", confirm);
btn[1].addEventListener("click", reject);
