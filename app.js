const loginInput = document.querySelector(".login-form input");
const loginBtn = document.querySelector(".login-form button");

const onLoginBtnClick = () => console.log(`Hello, ${loginInput.value}`);

loginBtn.addEventListener("click", onLoginBtnClick);

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

/* 3.3 - 3.5 Events
On JS, what we will do the most is listening to events;
Events are everything that can happen in the browser;
connecting to wifi, mouse is on top of h1, mouse leaves the windows, etc;

We can listen to events with the function: addEventListener();
This funciton takes two arguments: "event" & "handlerFunction";

"event" : the event we are trying to catch;
"handlerFunction" : function that will be executed when the "event" occurs;

You can find all the events we can use on MDN;
We can add multiple events on a single element;

Just like "document", JS has "window" by default;
Using "window", we can detect events such as "resize", "copy" etc;
From "window", we can also check status of the internet;
*/

/* 3.6 - 3.8 CSS in Javascript
When applying CSS using JS, convention is to utilize adding or removing class;
By creating the CSS style on certain class, we can apply them using JS;

If we are only applying one style, we can use element.className = "newClass";
However, this method has risk of resetting the whole classes on an element;
Thus when there are multiple classes, we first check conditional with element.classList.contains();
After checking, we can add or remove a class : element.classList.remove() or element.classList.add();

Another way to do it is to toggle the className;
By doing element.classList.toggle("className"), it will add or remove the className depending whether element has it or not;
*/

/* 4.0 Input Values
When creating repeating elements in HTML that you will grab using JS,
It is better to place them within a div with a unique class;
When grabbing value of an HTML input element: htmlElement.value;
*/
