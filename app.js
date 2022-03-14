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

const hellos = document.querySelector(".hello:nth-child(2)");

hellos.innerText = "which one is selected?";

/* 3.2 Searching For Elements
There are many different functions in document object to select elements;
Among them, the most frequently used function is document.querySelector();
With querySelector, we can select single element that matchs the query;
querySelectorAll will select all elements that match the query;
within querySelector, you can use CSS Selectors such as nth-child, etc;
*/
