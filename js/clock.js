const clock = document.querySelector(".clock");

const getClock = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
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

/* 5.2 PadStart
String.padStart(targetLength, "padString");
padStart() function takes two arguments;
First argument is the targetLength of the target string;
If string.length < targetLength, front part of the string is filled with the second argument, "padString";
If second argument is missing, front part is filled with spaces;

There is also String.padEnd() that fills the back part;

Since getHours(), getMinutes() and getSeconds() return only length 1 numbers for 1 digits,
we can use padStart() on those numbers to make the length consistent;
*/
