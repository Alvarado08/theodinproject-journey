//TODO Resource: https://javascript.info/class

//? a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods)
//? In JavaScript, a class is a kind of function

//* class syntax
class User {
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`${this.name} says hi!`);
    }
}
//* Usage
const user = new User('John');
user.sayHi();

//? A common pitfall for novice developers is to put a comma between class methods, which would result in a syntax error.

//? Magic under the hood
// class creates function -> function code is taken from constructor (assuming there is one given) -> stores class methods in User.prototype
// after new User object is created -> takes everything from the prototype recently initialized

//? Class uniqueness
// a function created by class is labelled by a special internal property [[IsClassConstructor]]: true
// The language checks for that property in a variety of places. For example, unlike a regular function, it must be called with new
// Also, a string representation of a class constructor in most JavaScript engines starts with the “class…”
// Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype"
// That’s good, because if we for..in over an object, we usually don’t want its class methods
// Classes always use strict. All code inside the class construct is automatically in strict mode

//TODO Class Expression

// Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.
// Similar to Named Function Expressions, class expressions may have a name

//* If a class expression has a name, it’s visible inside the class only:
let User2 = class MyClass {
    sayHi(){
        console.log(MyClass); // Only visible inside class
    }
}
new User2().sayHi(); // shows MyClass definition
// console.log(MyClass); // Error

//* We can even make classes dynamically “on-demand”, like this:
function makeClass(phrase){
    return class {
        myPhrase(){
            console.log(phrase);
        }
    }
}
let User3 = makeClass('Hello World'); // Create class
new User3().myPhrase();

//TODO Getters/Setters

// Just like literal objects, classes may include getters/setters, computed properties etc.

//* Here’s an example for user.name implemented using get/set:
class User4 {
    constructor(name){
        // invokes the setter
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length < 4){
            console.log('Name is too short');
            return;
        }
        this._name = value;
    }
}

//TODO Computed names [...]

//* Here’s an example with a computed method name using brackets [...]:
class User5 {
    ['my'+'Method'](){
        console.log('Hola');
    }
}
new User5().myMethod();

//TODO Class fields

// “Class fields” is a syntax that allows to add any properties

//* For instance, let’s add name property to class User:
class User6 {
    name = 'Jane';
    myName(){
        console.log(`Hi ${this.name}`);
    }
}
//? The important difference of class fields is that they are set on individual objects, not User.prototype

// let user6 = new User6();
// console.log(user6.name); // Jane
// console.log(User6.prototype.name); // undefined

//* We can also assign values using more complex expressions and function calls:
/*
class User {
  name = prompt("Name, please?", "John");
}
let user = new User();
alert(user.name); // John
**/

//? Making bound methods with class fields

// As demonstrated in the chapter Function binding functions in JavaScript have a dynamic this. It depends on the context of the call.
// So if an object method is passed around and called in another context, this won’t be a reference to its object any more
//! The problem is called "losing this"

// There are two approaches to fixing it, as discussed in the chapter Function binding:
// 1. Pass a wrapper-function, such as setTimeout(() => button.click(), 1000)
// 2. Bind the method to object, e.g. in the constructor

//* Class fields provide another, quite elegant syntax:
/* 
class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
}
let button = new Button("hello"); 
setTimeout(button.click, 1000); // hello
*/
//? The class field click = () => {...} is created on a per-object basis, there’s a separate function for each Button object, with this inside it referencing that object.
//? We can pass button.click around anywhere, and the value of this will always be correct
//? That’s especially useful in browser environment, for event listeners

//TODO Summary

// MyClass is technically a function (the one that we provide as constructor), while methods, getters and setters are written to MyClass.prototype

//TODO Task

//? The Clock class (see the sandbox) is written in functional style. Rewrite it in the “class” syntax

class Clock {
    constructor({ template }) {
        this.template = template;
    }
    render = () => {
        let output;
        let date = new Date();
        let hrs = date.getHours();
        if(hrs < 10) hrs = `0 ${hrs}`;
        let mins = date.getMinutes();
        if(mins < 10) mins = `0 ${mins}`;
        let secs = date.getSeconds();
        if(secs < 10) secs = `0 ${secs}`;
        output = this.template
        .replace('h', hrs)
        .replace('m', mins)
        .replace('s', secs);
        console.log(output);
    }
    stop = () => {
        clearInterval(this.timer)
    }
    start = () => {
        this.render();
        this.timer = setInterval(this.render,1000);
    }
}
let clock = new Clock({ template: 'h:m:s' });
// clock.start();