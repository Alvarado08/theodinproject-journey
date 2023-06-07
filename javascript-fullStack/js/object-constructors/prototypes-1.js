// TODO Digital Ocean: https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript

//* INTRO

//? JavaScript is a prototype-based language, meaning object properties and methods can be shared through generalized objects that have the ability to be cloned and extended.
//? This is known as prototypical inheritance and differs from class inheritance.
//? Among popular object-oriented programming languages, JavaScript is relatively unique, as other prominent languages such as PHP, Python, and Java are class-based languages, which instead define classes as blueprints for objects.

//* JAVASCRIPT PROTOTYPES

//? Every object in JavaScript has an internal property called [[Prototype]]. We can demonstrate this by creating a new, empty object.

let x = {};
// Another way to create an object: let x = new Object()

//? The double square brackets that enclose [[Prototype]] signify that it is an internal property, and cannot be accessed directly in code.
//? To find the [[Prototype]] of this newly created object, we will use the getPrototypeOf() method

console.log(Object.getPrototypeOf(x));
// The output will consist of several built-in properties and methods

//? Another way to find the [[Prototype]] is through the __proto__ property. __proto__ is a property that exposes the internal [[Prototype]] of an object
//! It is important to note that .__proto__ is a legacy feature and should not be used in production code, and it is not present in every modern browser.

console.log(x.__proto__);
// The output will be the same as if you had used getPrototypeOf()

//? It is important that every object in JavaScript has a [[Prototype]] as it creates a way for any two or more objects to be linked

//? Objects that you create have a [[Prototype]], as do built-in objects, such as Date and Array

//* PROTOTYPE INHERITANCE

//? When you attempt to access a property or method of an object, JavaScript will first search on the object itself, and if it is not found, it will search the object’s [[Prototype]]
//? If after consulting both the object and its [[Prototype]] still no match is found, JavaScript will check the prototype of the linked object, and continue searching until the end of the prototype chain is reached

//? At the end of the prototype chain is Object.prototype. All objects inherit the properties and methods of Object. Any attempt to search beyond the end of the chain results in null

//? In our example, x is an empty object that inherits from Object. x can use any property or method that Object has, such as toString()

console.log(x.toString(""));

//? This prototype chain is only one link long. x -> Object. We know this, because if we try to chain two [[Prototype]] properties together, it will be null

x.__proto__.__proto__; // null

//? If you have experience Working with Arrays in JavaScript, you know they have many built-in methods, such as pop() and push()
//? The reason you have access to these methods when you create a new array is because any array you create has access to the properties and methods on the Array.prototype.

let y = [];
//? If we take a look at the [[Prototype]] of the new y array, we will see that it has more properties and methods than the x object. It has inherited everything from Array.prototype

console.log(y.__proto__);

//? You will notice a constructor property on the prototype that is set to Array()
//? The constructor property returns the constructor function of an object, which is a mechanism used to construct objects from functions.

//? We can chain two prototypes together now, since our prototype chain is longer in this case. It looks like y -> Array -> Object

y.__proto__.__proto__;

//? This chain is now referring to Object.prototype. We can test the internal [[Prototype]] against the prototype property of the constructor function to see that they are referring to the same thing.

y.__proto__ === Array.prototype; // true
y.__proto__.__proto__ === Object.prototype; // true

//? We can also use the isPrototypeOf() method to accomplish this.

Array.prototype.isPrototypeOf(y); // true
Object.prototype.isPrototypeOf(Array); // true

//? We can use the instanceof operator to test whether the prototype property of a constructor appears anywhere within an object’s prototype chain

y instanceof Array; // true

//? To summarize, all JavaScript objects have a hidden, internal [[Prototype]] property (which may be exposed through __proto__ in some browsers)
//? Objects can be extended and will inherit the properties and methods on [[Prototype]] of their constructor
//? These prototypes can be chained, and each additional object will inherit everything throughout the chain. The chain ends with the Object.prototype

//* CONSTRUCTOR FUNCTIONS

//? Constructor functions are functions that are used to construct new objects.
//? The new operator is used to create new instances based off a constructor function.
//? We have seen some built-in JavaScript constructors, such as new Array() and new Date(), but we can also create our own custom templates from which to build new objects.

//? As an example, let’s say we are creating a very simple, text-based role-playing game. A user can select a character and then choose what character class they will have, such as warrior, healer, thief, and so on

//? To begin, a constructor function is just a regular function. It becomes a constructor when it is called on by an instance with the new keyword. In JavaScript, we capitalize the first letter of a constructor function by convention.

// Initialize a constructor function for a new Hero
function Hero(name, level) {
    this.name = name;
    this.level = level;
}

//? Since every character will have a name and a level, it makes sense for each new character to have these properties.
//? The this keyword will refer to the new instance that is created, so setting this.name to the name parameter ensures the new object will have a name property set

let hero1 = new Hero("Bjorn", 3);
console.log(hero1);

//? Now if we get the [[Prototype]] of hero1, we will be able to see the constructor as Hero(). (Remember, this has the same input as hero1.__proto__, but is the proper method to use.)

console.log(Object.getPrototypeOf(hero1));

//? We can add a method to Hero using prototype. We’ll create a greet() method

Hero.prototype.greet = function(){
    console.log(`${this.name} says Hi`);
}

//? Since greet() is in the prototype of Hero, and hero1 is an instance of Hero, the method is available to hero1

hero1.greet();
// If you inspect the [[Prototype]] of Hero, you will see greet() as an available option now.

//? We want to create new constructor functions, but we also want them to be connected to the original Hero

// Initialize Warrior constructor
function Warrior(name,level,weapon){
    // Chain constructor with call
    Hero.call(this, name, level);
    this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name,level,spell){
    Hero.call(this,name,level);
    this.spell = spell;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

//? Both new constructors now have the properties of Hero and a few unqiue ones
// We’ll add the attack() method to Warrior, and the heal() method to Healer

Warrior.prototype.attack = function(){
    console.log(`${this.name} attacks with the ${this.weapon}`);
}

Healer.prototype.heal = function(){
    console.log(`${this.name} casts ${this.spell}`);
}

const warrior1 = new Warrior("Kanin",5,"axe");
const healer1 = new Healer("Jonke",2,"freeze");
console.log(warrior1);
console.log(healer1);

warrior1.attack();
healer1.heal();

//? But what happens if we try to use methods further down the prototype chain?
// warrior1.greet(); / Uncaught TypeError: hero1.greet is not a function

//? Prototype properties and methods are not automatically linked when you use call() to chain constructors.
//? We will use Object.setPropertyOf() to link the properties in the Hero constructor to the Warrior and Healer constructors, making sure to put it before any additional methods

// Now we can successfully use prototype methods from Hero on an instance of a Warrior or Healer

warrior1.greet();

//? With this code we’ve created our Hero constructor with the base properties, created two character constructors called Warrior and Healer from the original constructor, added methods to the prototypes and created individual character instances.

//* CONCLUSION

//? JavaScript is a prototype-based language, and functions differently than the traditional class-based paradigm that many other object-oriented languages use.

//? we learned how prototypes work in JavaScript, and how to link object properties and methods via the hidden [[Prototype]] property that all objects share.

//? We also learned how to create custom constructor functions and how prototype inheritance works to pass down property and method values.