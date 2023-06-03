# Knowledge Check

## What is the DOM?
**DOM stands for Document Object Model. It is essentially the HTML document in a tree-like representation of our "nodes" which is basically the page content with a parent-child relationship**

## How do you target the nodes you want to work with?
**You can use a combination of CSS-style selectors and relationship properties to target the nodes you want. Some of these include: div.display, .display, #container > .display and div#container > div.display. You can also use relational selectors (i.e. firstElementChild or lastElementChild etc.) with special properties owned by the nodes. A common relational selector is querySelector("node")**

## How do you create an element in the DOM?
**The function document.createElement("tag name") creates an element in memory. Storing a created element in a variable is good practice**

## How do you add an element to the DOM?
**By using parentNode.appendChild(childNode)**

## How do you remove an element from the DOM?
**By using parentNode.removeChild(child)**

## How can you alter an element in the DOM?
**You can add/remove and alter attributes, changing classes, adding inline style information and more. Some examples of this is using: div.style.color, div.style.cssText, div.setAttribute() for inline styling. div.setAttribute(), div.getAttribute(), div.removeAttribute() for editing attributes. div.classList.add(), div.classList.remove(), div.classList.toggle() when working with classes. div.textContent when editing text** 

## When adding text to a DOM element, should you use textContent or innerHTML? Why?
**It is recommended to use textContent for security reasons**

## Where should you include your JavaScript tag in your HTML file when working with DOM nodes?
**Either in the head section of your document or at the end, before the closing body tag. If it is includes at the top, defer must be included in order to load the file after the HTML is parsed**

## How do “events” and “listeners” work?
**Events are actions that occur on your webpage such as mouse-clicks or keypresses so the webpage can listen and react to them**

## What are three ways to use events in your code?
**Inline onclick event, external onclick property and eventListener**

## Why are event listeners the preferred way to handle events?
**They can be used multiple times**

## How do you attach listeners to groups of nodes?
**First, select all items to convert to a nodelist with querySelectorAll('selector'). Then, to add a listener to each of them, we simply need to iterate through the whole list with forEach method**

## What is the difference between the return values of querySelector and querySelectorAll?
**querySelector returns a reference to the first match of selector while querySelectorAll returns a node list containing references to all of the matches of the selectors**

## What does a “nodelist” contain?
**References to all matches of the selectors**

## Explain the difference between “capture” and “bubbling”
**Capture happens first from the outside (document) which first grabs the farthest element then works down to the closest with the eventListener while bubbling grabs elements from the inside out, the closest with eventListener to farthest element. Capture moves down the tree and bubbling moves up the tree**