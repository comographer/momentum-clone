const clock = document.querySelector(".clock");

const getClock = () => {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

getClock();
setInterval(getClock, 1000);

/* 5.0 Intervals
Interval is something that happens per every time unit;
In JS, we can set interval for functions we want to execute over and over;
To set interval: setInterval(function, interval);
The interval in setInterval should be written in milliseconds;
*/

/* 5.1 Timeouts and Dates
setTimeout(function, millisecond) is similar to interval;
Main difference is that setTimeout will execute the function only once after set milliseconds;

To get current Date in JS:
const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`

To get current Time in JS;
const today = new Date();
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
*/
