# Knowledge Check

## What is the DOM?
**DOM stands for Document Object Model. It is essentially the HTML document in a tree-like representation of our "nodes" which is basically the page content with a parent-child relationship**

## How do you target the nodes you want to work with?
**You can use a combination of CSS-style selectors and relationship properties to target the nodes you want. Some of these include: div.display, .display, #container > .display and div#container > div.display. You can also use relational selectors (i.e. firstElementChild or lastElementChild etc.) with special properties owned by the nodes. A common relational selector is querySelector("node")**

## How do you create an element in the DOM?
**The function document.createElement("tag name") creates an element in memory. Storing a created element in a variable is good practice**