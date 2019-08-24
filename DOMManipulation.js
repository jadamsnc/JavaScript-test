// pick h1 elements
var h1 = document.querySelector("h1");
// set h1 elements to pink
h1.style.color = "pink";

// pick body of document and change background color every second
var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
    if (isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "#4298db";
    }
    isBlue = !isBlue;  // change the boolean value to the opposite of current value
});

// select an element by its ID
var ele = document.getElementById("ID Here");

// select all elements of one class. returns a node list
var tags = document.getElementsByClassName("bolded");

// select items by tag name. returns node list.
var tags = document.getElementsByTagName("li");

// return the first element that matches a given CSS=style selector
var tag = document.querySelector("#highlight");
var tag = document.querySelector(".bolded");

// return all elements that match a given CSS style selector
var tags = document.querySelectorAll("#highlight");
var tags = document.querySelectorAll("li");


// change the style of an object
// this can be done for any css element
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

// if changing multiple css properties we should define a class in the css file
// and then use javascript to apply the class to objects when needed like this
tag.classList.add("some-class");
// remove a class
tag.classList.remove("some-class");
// to turn a class on or off depending on it's current state
tag.classList.toggle("some-class");

// retrieve text between selected tags (excluding tags)
tag.textContent;
// this can also be used to change the text content of an item
tag.textContent = "blah blah blah";

// returns all the HTML returned in a given element
tag.innerHTML;

// use getAttribute() and setAttribute() to read and write attributes like src or href
var link = document.querySelector("a");
link.setAttribute("href", "www.dogs.com"); // sets the href attribute of a elements to dogs.com
var pic = document.querySelector("img");
pic.setAttribute("src", "image address");


// to add a listenered use addEventListener
// like element.addEventListener(type, functionToCall)
var button = document.querySelector("button");
button.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON!");
});