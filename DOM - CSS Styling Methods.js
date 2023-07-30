// There are 3 methods to do CSS styling using DOM:
// Using style
// Using className
// Using classList

var element;

// Getting a CSS Style
element = document.querySelector(".paragraphs").style.color;
console.log(element);

element = document.querySelector("#footer").style.backgroundColor;
console.log(element); // Why I am unable to get these on console?

// Setting a CSS Style 
document.querySelector("#content").style.backgroundColor = "orange";
element = document.querySelector("#content").style.backgroundColor;
console.log(element);

// Setting and Getting className
document.querySelector("#footer").className = "address";
element = document.querySelector("#footer").className;
console.log(element); // className returns all classes as a string

document.querySelector("#header").className = "title name"; // Two classes can be added simultaneously
element = document.querySelector("#header").className;
console.log(element);

document.querySelector("#content").className = "story";
element = document.querySelector("#content").className;
console.log(element);

// Setting and Getting classList
document.querySelector("#menu").classList = "navbar";
element = document.querySelector("#menu").classList;
console.log(element); // classList returns an array (DOM Token list)

document.querySelector("#sidebar").classList.add("navbar", "sidepanel"); // 1 or more classes can be added
element = document.querySelector("#sidebar").classList;
console.log(element);

document.querySelector("#header").classList.remove("name");
element = document.querySelector("#header").classList;
console.log(element);
