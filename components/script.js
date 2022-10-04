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

var countdownDay = document.getElementById("inside-circle-day");
var countdownHour = document.getElementById("inside-circle-hour");
var countdownMinute = document.getElementById("inside-circle-minute");
var countdownSecond = document.getElementById("inside-circle-second");

var fillSecondOne = document.getElementById("fill-second-one");
var fillSecondTwo = document.getElementById("fill-second-two");

var fillMinuteOne = document.getElementById("fill-minute-one");
var fillMinuteTwo = document.getElementById("fill-minute-two");

var fillHourOne = document.getElementById("fill-hour-one");
var fillHourTwo = document.getElementById("fill-hour-two");

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
  countdownDay.innerHTML =
    "<span>" + days + "</span>" + "<br/><span>Days</span>";
  countdownHour.innerHTML =
    "<span>" + hours + "</span>" + "<br/><span>Hours</span>";
  countdownMinute.innerHTML =
    "<span>" + minutes + "</span>" + "<br/><span>Minutes</span>";
  countdownSecond.innerHTML =
    "<span>" + seconds + "</span>" + "<br/><span>Seconds</span>";
  if (seconds > 30) {
    fillSecondOne.style.display = "block";
    fillSecondOne.style.transform = `rotate(${180 - (60 - seconds) * 6}deg)`;
    fillSecondTwo.style.transform = `rotate(180deg)`;
  } else {
    fillSecondOne.style.display = "none";
    fillSecondTwo.style.transform = `rotate(${seconds * 6}deg)`;
  }
  if (minutes > 30) {
    fillMinuteOne.style.display = "block";
    fillMinuteOne.style.transform = `rotate(${180 - (60 - minutes) * 6}deg)`;
    fillMinuteTwo.style.transform = `rotate(180deg)`;
  } else {
    fillMinuteOne.style.display = "none";
    fillMinuteTwo.style.transform = `rotate(${minutes * 6}deg)`;
  }

  if (hours >= 12) {
    fillHourOne.style.display = "block";
    fillHourOne.style.transform = `rotate(${90 - (24 - hours) * 7.5}deg)`;
    fillHourTwo.style.transform = `rotate(180deg)`;
  } else {
    fillHourOne.style.display = "none";
    fillHourTwo.style.transform = `rotate(${hours * 7.5}deg)`;
  }
}

function pad(n) {
  return (n < 10 ? "0" : "") + n;
}
