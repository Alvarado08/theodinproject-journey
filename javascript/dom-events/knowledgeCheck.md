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