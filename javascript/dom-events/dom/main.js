//TODO DOM MANIPULATON 

//* Exercise 1. Reviewed content example

const container = document.querySelector("#container");
const content = document.createElement("div");

content.classList.add("content");
content.textContent = "The super powerful text-content!"

container.appendChild(content);

//* Exercise 2

//? 1. a <p> with red text that says “Hey I’m red!”
const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";
container.appendChild(p);

//? 2. an <h3> with blue text that says “I’m a blue h3!”
const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "Hey I'm a blue h3!";
container.appendChild(h3);

//? 3. a <div> with a black border and pink background color with the following elements inside of it:
const newDiv = document.createElement("div");
newDiv.style.cssText = "border: solid black; background: pink;"
container.appendChild(newDiv);

//? 3.1 another <h1> that says “I’m in a div”
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
newDiv.appendChild(h1);

//? 3.2 a <p> that says “ME TOO!”
const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
newDiv.appendChild(p2);

//TODO EVENTS

//? There are three primary ways to trigger Events:
//* 1. Specify function attributes directly on your HTML elements
//* 2. Set properties of form on[eventType] (onclick, onmousedown, etc.) on the DOM nodes in your JavaScript
//* 3. Attach event listeners to the DOM nodes in your JavaScript
//! Event listeners are definitely the preferred method

//? Create 3 buttons that all alert “Hello World” when clicked

//* Method 1:
//! Refer to html file 1st button element
//? This solution is less than ideal because we’re cluttering our HTML with JavaScript
//? We can only set one “onclick” property per DOM element
//? We’re unable to run multiple separate functions in response to a click event using this method

//* Method 2:
//? This is a little better. We’ve moved the JS out of the HTML and into a JS file
//? But we still have the problem that a DOM element can only have 1 “onclick” property

const method2 = document.querySelector("#method2");
method2.onclick = () => alert("Hello World");

//* Method 3
//? Now, we maintain separation of concerns
//? We also allow multiple event listeners if the need arises
//? Method 3 is much more flexible and powerful, though it is a bit more complex to set up

const method3 = document.querySelector("#method3");
method3.addEventListener("click", () => {
    alert("Hello World");
});

// Note that all 3 of these methods can be used with named functions like so:

//? Method 1
//! Refer to Round 2 section in html file
function alertFunction(){
    alert("YAY! YOU DID IT!");
}

//? Method 2
const btn = document.querySelector("#btn");
btn.onclick = alertFunction;

//? Method 3
btn.addEventListener("click", alertFunction);

//! Using named functions can clean up your code considerably
//? Is a really good idea if the function is something that you are going to want to do in multiple places

/* With all three methods we can access more information about the event by passing a parameter 
to the function that we are calling
*/

//* Note that function (e) is a callback from addEventListener
const btnParams = document.querySelector("#btnParams");
btnParams.addEventListener("click", function (e){
    console.log(e);
});

//? The e in that function is an object that references the event itself
//? Within that object you have access to many useful properties and methods(functions that live inside an object)
//? such as which mouse button or key was pressed
//? or information about the event’s target - the DOM node that was clicked

//* Try this:
btnParams.addEventListener('click', function (e) {
    console.log(e.target);
});

//* Also try this:
btnParams.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

// Attaching Listeners to Groups of Nodes
//? This might seem like a lot of code if you’re attaching lots of similar event listeners to many elements
//? There are a few ways to go about doing that more efficiently
//* We can get a nodelist of all of the items matching a specific selector with querySelectorAll('selector')

//* In order to add a listener to each of them we simply need to iterate through the whole list like so:
//! Refer to id container2 in html file

//? buttons is a node list. It looks and acts much like an array
const buttons = document.querySelectorAll("button");

//? we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    //? and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});