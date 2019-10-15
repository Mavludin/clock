let currSeconds = new Date().getSeconds();
const seconds = document.getElementById('seconds');
seconds.style.transform = `rotate(${currSeconds*6-90}deg)`;

let currMinutes = new Date().getMinutes();
const minutes = document.getElementById('minutes');
minutes.style.transform = `rotate(${currMinutes*6-90}deg)`;

let currHours = new Date().getHours();
const hours = document.getElementById('hours');
if (currHours > 12) currHours-=12;
hours.style.transform = `rotate(${currHours*30-90}deg)`;

setInterval(() => {
	let currSeconds = new Date().getSeconds();
	seconds.style.transform = `rotate(${currSeconds*6-90}deg)`;

	let currMinutes = new Date().getMinutes();
	minutes.style.transform = `rotate(${currMinutes*6-90}deg)`;

	let currHours = new Date().getHours();
	if (currHours > 12) currHours-=12;
	hours.style.transform = `rotate(${currHours*30-90}deg)`;

}, 1000)