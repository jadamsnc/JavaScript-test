// this is the default way to build a function in JavaScript
// functions in JavaScript use camel case for naming
function doSomething() {
    console.log("Hello World");
}

doSomething();

// a function that squares a number and prints the output to console
function square(num) {
    console.log(num * num);
}

function area(length, width) {
    console.log(length * width);
}

// this function capitalizes the first char in a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// function expressions are defined like
var capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(num){
    if (num < 2) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function kebabToSnake(str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}


// adding method to an object
comments = {}
comments.data = ['something', 'something else'];
comments.print = function() {
    this.data.forEach(function(el) {
        console.log(el);
    });
}