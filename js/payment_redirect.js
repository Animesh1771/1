let time = 5; 
let counter;
function countDownTimer() {
	let display = document.getElementById("timer");
	display.innerHTML = time;
	time--;
	if (time < 0) {
		clearInterval(counter);
		window.location.href = "home.html";
	}
}		
function startTimer() {
	counter = setInterval(countDownTimer, 1000);
}
startTimer();