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


