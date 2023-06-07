// TODO LINK: https://www.theodinproject.com/lessons/node-path-javascript-objects-and-object-constructors

//* THE PROTOYPE

//? All objects in JavaScript have a prototype
//? Stated simply, the prototype is another object that the original object inherits from
//? which is to say, the original object has access to all of its prototype’s methods and properties

// Break It Down
//? 1. All objects in JavaScript have a prototype
// For example, the player1 and player2 objects from before, (created with the Player(name, marker) object constructor) also have a prototype

//? Stated simply, the prototype is another object
// The prototype object can have properties and functions, just as these Player objects have properties like .name, .marker, and functions like .sayName() attached to them

//? that the original object inherits from, and has access to all of its prototype’s methods and properties
// Here, the “original object” refers to an object like player1 or player2
// These objects are said to “inherit”, or simply said, these objects have access to the prototype’s properties or functions
// For example, if there was a .sayHello() function defined on the prototype, player1 can access the function just as if it was it’s own function - player1.sayHello()
// even player2 can call it, since it’s defined on the prototype!

//* Accessing an object’s prototype

function Player(name,marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(name);
    }
}

const player1 = new Player("Steve", "O");
const player2 = new Player("Also steve", "X");

Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true

//? You can check the object’s prototype by using the Object.getPrototypeOf() function on the object
//? The return value (result) of this function refers to the .prototype property of the Object Constructor (i.e., Player(name, marker))

//? The value of the Object Constructor’s .prototype property (i.e., Player.prototype) contains the prototype object
//? The reference to this value of Player.prototype is stored in every Player object, every time a Player object is created

//? every Player object has a value which refers to Player.prototype
//? So: Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2) (returns true)

//? So, any properties or methods defined on Player.prototype will be available to the created Player objects!

//? What does defining ‘on the prototype’ mean?

Player.prototype.sayHello = function(){
    console.log("Hello, I'm a player!");
}

player1.sayHello(); // logs Hello, I'm a player!
player2.sayHello(); // logs Hello, I'm a player!

//? Here, we defined the .sayHello function ‘on’ the Player.prototype object
//? It then became available for the player1 and the player2 objects to use!
//? Similarly, you can attach other properties or functions you want to use on all Player objects by defining them on the objects’ prototype (Player.prototype)

//* Object.getPrototypeOf() vs. .proto vs. [[Prototype]]

//? Unlike what we have done so far using Object.getPrototypeOf() to access an object’s prototype, the same thing can also be done using the .__proto__ property of the object
//! However, this is a non-standard way of doing so, and deprecated.
//? Hence, it is not recommended to access an object’s prototype by using this property

player1.__proto__ === Player.prototype // returns true
player2.__proto__ === Player.prototype // returns true

//? In some places, like legacy code, you might also come across [[Prototype]], which is just another way of talking about the .__proto__ property of an object, like player1.[[Prototype]]

//* Prototypal Inheritance

//? What is the purpose of defining properties and functions on the prototype?

// We can narrow it down to two reasons:
//? 1. We can define properties and functions common among all objects on the prototype to save memory. Defining every property and function takes up a lot of memory, especially if you have a lot of common properties and functions, and a lot of created objects! Defining them on a centralized, shared object which the objects have access to, thus saves memory.
//? 2. The second reason is the name of this section, Prototypal Inheritance. In recap, we can say that the player1 and player2 objects inherit from the Player.prototype object, which allows them to access functions like .sayHello.

// Try the following:
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true
// Output may slightly differ based on the browser
player1.valueOf() // Object { name: "steve", marker: "X", sayName: sayName() } 

//? What’s this .valueOf function, and where did it come from if we did not define it?
//? It comes as a result of Object.getPrototypeOf(Player.prototype) having the value of Object.prototype!
//? This means that Player.prototype is inheriting from Object.prototype.
//? This .valueOf function is defined on Object.prototype just like .sayHello is defined on Player.prototype

//? How do we know that this .valueOf function is defined on Object.prototype?
//? We make use of another function called .hasOwnProperty:
player1.hasOwnProperty("valueOf"); // false
Object.prototype.hasOwnProperty('valueOf'); // true

//? Where did this .hasOwnProperty function come from?
Object.prototype.hasOwnProperty('hasOwnProperty'); // true

//? By having the objects contain a value - to point to prototypes and inheriting from those prototypes, and thus forming a chain.
//? This kind of inheritance using prototypes is hence named as Prototypal inheritance
//? JavaScript figures out which properties exist (or do not exist) on the object and starts traversing the chain to find the property or function

//? 1. Is the .valueOf function part of the player1 object? No, it is not.
//? 2. Is the function part of the player1’s prototype (the Object.getPrototypeOf(player1) value, i.e., Player.prototype)? No, only the .sayHello function is a part of it
//? 3. Well, then, is it part of Object.getPrototypeOf(Player.prototype) (=== Object.prototype)? Yes, .valueOf is defined on Object.prototype!

//? However, this chain does not go on forever, and if you have already tried logging the value of Object.getPrototypeOf(Object.prototype), you would find that it is null, which indicates the end of the chain
//? And it is at the end of this chain that if the specific property or function is not found, undefined is returned

//? Every prototype object inherits from Object.prototype by default
//? An object’s Object.getPrototypeOf() value can only be one unique prototype object

//* Recommended Method for Prototypal Inheritance

//? How do you utilize Prototypal Inheritance? What do you need to do to use it?
//? Just as we use Object.getPrototypeOf() to ‘get’ or view the prototype of an object, we can use Object.setPrototypeOf() to ‘set’ or mutate it
//? Let’s see how it works by adding a Person Object Constructor to the Player example, and making Player inherit from Person!

/*

function Person(name) {
  this.name = name
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`)
}

function Player(name, marker) {
  this.name = name
  this.marker = marker
}

Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`)
}

/ Object.getPrototypeOf(Player.prototype) should 
/ return the value of "Person.prototype" instead 
/ of "Object.prototype"
Object.getPrototypeOf(Player.prototype) // returns Object.prototype

/ Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype)
Object.getPrototypeOf(Player.prototype) // returns Person.prototype

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')

player1.sayName() // Hello, I'm steve!
player2.sayName() // Hello, I'm also steve!

player1.getMarker() // My marker is 'X'
player2.getMarker() // My marker is 'O'

*/

//? We can see that we’ve defined a Person from whom a Player inherits properties and functions
//? and that the created Player objects are able to access both the .sayName and the .getMarker functions, in spite of them being defined on two separate prototype objects!

//? This is enabled by the use of the Object.setPrototypeOf() function
//? It takes two arguments - the first is the one which inherits and the second argument is the one which you want the first argument to inherit from.
//? This ensures that the created Player objects are able to access the .sayName and .getMarker functions through their prototype chain

//? Though it seems to be an easy way to set up Prototypal Inheritance using Object.setPrototypeOf(), the prototype chain has to be set up using this function before creating any objects
//? Using setPrototypeOf() after objects have already been created can result in performance issues.

//! This doesn’t work:
// Player.prototype = Person.prototype
//? because it will set Player.prototype to directly refer to Person.prototype (i.e. not a copy), which could cause problems if you want to edit something in the future.

//Another example:

/*

function Person(name) {
  this.name = name
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`)
}

function Player(name, marker) {
  this.name = name
  this.marker = marker
}

/ Don't do this!
/ Use Object.setPrototypeOf(Player.prototype, Person.prototype)
Player.prototype = Person.prototype

function Enemy(name) {
  this.name = name
  this.marker = '^'
}

/ Not again!
/ Use Object.setPrototypeOf(Enemy.prototype, Person.prototype)
Enemy.prototype = Person.prototype

Enemy.prototype.sayName = function() { 
  console.log('HAHAHAHAHAHA')
}

const carl = new Player('carl', 'X')
carl.sayName() // Uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!

*/

//? If we had used Object.setPrototypeOf() in this example, then we could safely edit the Enemy.prototype.sayName function without changing the function for Player as well

//* ASSIGNMENT 

// TODO Digital Ocean: https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript

// TODO Js Info: https://javascript.info/prototype-inheritance