var modal = document.querySelector(".modal");
var welcome = document.querySelector("#come");
var hell = document.querySelector("p.glitch");
var time = Infinity;

window.addEventListener("scroll", function(e) {
  var wR = welcome.getBoundingClientRect();
  var hR = hell.getBoundingClientRect();
  if (wR.bottom >= hR.bottom - 20 && wR.bottom <= hR.bottom + 20) {
      modal.style.display = "block";
      modal.classList.add("reveal");
      var date = new Date();
      if (time === Infinity || Math.round(date.getTime() / 1000) > time + 10) {
        time = Math.round(date.getTime() / 1000)
      }
  } else if (modal.style.display == "block"){
      modal.style.display == "none";
      modal.classList.remove("reveal");
      time = Infinity;
  }
});

function runFunction() {
  var date = new Date();
  var timeNow = Math.round(date.getTime() / 1000);
  console.log(timeNow, time);
  if (timeNow - 10 > time) {
    window.location = "operations/U87ZA/OP1.html";
  }
}

var t = setInterval(runFunction, 1000);
