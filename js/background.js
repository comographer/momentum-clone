const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);

/* 6.1 Background
From JS, we can also adding element to the HTML;
First, we create an element withing JS: const element = document.createElement("tag");
Second, we append it to the HTML: document.body.appendChild(element);

For images, we can add source of the image using element.src;
*/
