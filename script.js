//your JS code here. If required.
function updatetimer(){
	const now = new Date();

	const dateTimeString = now.toLocalesString();

	const timerContainer = document.getElementById('timer');

	timerContainer.textContent = dateTimeString;
}

updatetimer();

setInterval(updatetimer, 1000);