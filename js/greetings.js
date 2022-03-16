const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");
const logoutBtn = document.querySelector("h6");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (event) => {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
};

const paintGreetings = (username) => {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}

const handleLogout = () => {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
};

logoutBtn.addEventListener("click", handleLogout);

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

/* 4.1 Form Submission
If we want to validate input such as maxlength or required,
we should put the input inside of <form> tag;
In order to prevent form refreshing the browser when input is submitted:
event.preventDefault();
*/

/* 4.2 - 4.3 Events
To prevent certain default behavior of HTML elements,
on the callback function, we put in the first argument, usually called (event),
and write the line event.preventDefault();
*/

/* 4.4 Getting Username
When you want to hide certain element, you can apply with a ".hidden" class;
".hidden" class will have property "display: none";
Same technic can be used for element you want to hide until certain event happens;

When certain className is used repeatedly, convention is to save it as a variable;
When you are saving a string such as className as variable, convention is to make variable name uppercase;

When combining variables with strings, we can use below format:
`string ${variable}`;
*/

/* 4.5 Saving Username
When we want to save things, like how YT remembers your volume value,
There is a useful API called localStorage that we can use;
localStorage lets you save things on the browser(more on MDN);

To save value: localStorage.setItem("key", "value");
To get value: localStorage.getItem("key");
To remove value: localStorage.removeItem("key");
*/

/* 4.6 Loading Username
When you have a saved username on localStorage and want your program to act accordingly,
you can setup conditional to check localStorage and assign action according whether
there is saved value localStorage or not;
*/
