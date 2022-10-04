var input_date = document.getElementById("date-c");
var target_date = new Date("0000-00-00");
var newCountdown = input_date.addEventListener("change", function () {
  var input = this.value;
  target_date = new Date(input);
  var curr = new Date().getTime();
  if (target_date < curr) {
    alert("Date is from past and i am unble to to time travel.");
    console.log("This is Chutiyapa");
    target_date = curr;
  }
});
var days, hours, minutes, seconds;

var countdown = document.getElementById("tiles");

getCountdown();

setInterval(function () {
  getCountdown();
}, 1000);

function getCountdown() {
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  days = pad(parseInt(seconds_left / 86400));
  seconds_left = seconds_left % 86400;

  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;

  minutes = pad(parseInt(seconds_left / 60));
  seconds = pad(parseInt(seconds_left % 60));

  // format countdown string + set tag value
  countdown.innerHTML =
    "<span>" +
    days +
    "</span><span>" +
    hours +
    "</span><span>" +
    minutes +
    "</span><span>" +
    seconds +
    "</span>";
}

function pad(n) {
  return (n < 10 ? "0" : "") + n;
}
