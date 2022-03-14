/* 3.0 The Document Object
JS can access the HTML from the "document" object;
By using this, we can point to different HTML elements from JS and modify them;
*/

const title = document.getElementById("title");
title.innerText = "Got You!";

console.log(title.id);

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
