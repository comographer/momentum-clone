/* 3.0 The Document Object
JS can access the HTML from the "document" object;
By using this, we can point to different HTML elements from JS and modify them;
*/

/* 3.1 HTML in Javascript
To grab elements from HTML, we use functions from document object;
document.getElementById();
document.getElementsByClassName();
document.querySelector();
document.querySelectorAll();

By grabbing an HTML element, we can change it from JS;
For example, below will change text of #title to "Got You!";
const title = document.getElementById("title");
title.innerText = "Got You!";
*/

/* 3.2 Searching For Elements
There are many different functions in document object to select elements;
Among them, the most frequently used function is document.querySelector();
With querySelector, we can select single element that matchs the query;
querySelectorAll will select all elements that match the query;
within querySelector, you can use CSS Selectors such as nth-child, etc;
*/

/* 3.3 Events
On JS, what we will do the most is listening to events;
Events are everything that can happen in the browser;
connecting to wifi, mouse is on top of h1, mouse leaves the windows, etc;

We can listen to events with the function: addEventListener();
This funciton takes two arguments: "event" & "handlerFunction";

"event" : the event we are trying to catch;
"handlerFunction" : function that will be executed when the "event" occurs;
*/

const title = document.querySelector(".hello");

const handleTitleClick = () => (title.style.color = "blue");

const handleMouseEnter = () => (title.innerText = "Mouse is here");

const handleMouseLeave = () => (title.innerText = "Mouse is Gone");

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

/* 3.4 Events part Two
We can find 
*/
