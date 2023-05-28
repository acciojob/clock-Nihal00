//your JS code here. If required.
// function updatetimer(){
// 	const now = new Date();

// 	const dateTimeString = now.toLocalesString();

// 	const timerContainer = document.getElementById('timer');

// 	timerContainer.textContent = dateTimeString;
// }

// updatetimer();

// setInterval(updatetimer, 1000);
var now = new Date();

// Format the date and time
var formattedDate = now.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
var formattedTime = now.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});


var p = document.getElementById('timer');

p.innerHTML = formattedDate + ", " + formattedTime;

// Set a timer to update the date and time every second
var timer = setInterval(function() {
  // Get the current date and time
  now = new Date();

  // Format the date and time
  formattedDate = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  // Update the date and time in the p element
  p.innerHTML = formattedDate + ", " + formattedTime;
}, 1000);