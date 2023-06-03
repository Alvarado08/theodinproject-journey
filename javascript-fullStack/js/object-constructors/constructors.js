//TODO LINK: https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors

//* REFRESHER

//? It is best to use the object literal syntax:
const myObj = {
    property: "Value!",
    otherProperty: 77,
    "obnoxious property": function(){
        console.log("I'm a function!");
    }
}
// There are also 2 ways to get information out of an object: dot notation and bracket notation

//? Dot notation is cleaner and is usually preferred, but there are plenty of circumstances when it is not possible to use it
//? For example, myObject."obnoxious property" won’t work because that property is a string with a space in it

//? Likewise, you cannot use variables in dot notation:
const variable = 'property';
myObj.variable; // this gives us 'undefined' because it's looking for a property named 'variable' in our object
myObj[variable]; // this is equivalent to myObject['property'] and returns 'Value!'

//* OBJECTS AS A DESIGN PATTERN

//? One of the simplest ways you can begin to organize your code is by simply grouping things into objects

/*

/ example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

/ example two
const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}

*/

// At first glance, the first doesn’t seem so bad.. and it actually takes fewer lines to write than the example using objects, 
// but the benefits of the second approach are huge!

//? This is something that you just could NOT do with the example one setup
function printName(player) {
    console.log(player.name)
}

//? Every time you wanted to print a specific player’s name, you would have to remember the correct variable name and then manually console.log it

//? Again, this isn’t that bad… but what if you don’t know which player’s name you want to print?
function gameOver(winningPlayer){
    console.log("Congratulations!")
    console.log(winningPlayer.name + " is the winner!")
}

//? manually typing out the contents of our objects is not feasible either. 
//? We need a cleaner way to create our objects, which brings us to…

//* OBJECT CONSTRUCTORS

//? When you have a specific type of object that you need to duplicate like our player or inventory items, 
//? a better way to create them is using an object constructor

function Player(name, marker) {
    this.name = name
    this.marker = marker
}

// which you use by calling the function with the keyword "new"
const player = new Player("Jane","X");
//console.log(player);

//? Just like with objects created using the Object Literal method, you can add functions to the object:

function Player2(name,marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(name);
    }
}

const player1 = new Player2("Steve", "O");
const player2 = new Player2("Also steve", "X");
//player1.sayName(); // "steve"
//player2.sayName(); // "also steve"

//* EXERCISE
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read === true ? "read" : "not read yet"}`;
    }
}
const book1 = new Book("Finish What You Start","John Doe",230,false);
console.log(book1.info()); // Finish What You Start by John Doe, 230 pages, not read yet