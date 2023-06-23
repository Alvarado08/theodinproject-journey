//TODO LINK: https://youtu.be/wstwjQ1yqWQ

let arr = ["name","surname"];
let object = {
    name: "name",
    city: "LA",
    getIntro: () => {
        console.log(`${this.name} + ${this.city}`);
    }
}

function fun(){
}

//? When you create an object, js engine automatically attaches another object(prototype) to this original object

//? __proto__ is the object that js attaches to original 
//? It has access to methods

//? arr.__proto__ === Array.prototype

//? arr.__proto__ also has a prototype. It is arr.__proto__.__proto__
//? This arr.__proto__.__proto__ prototype === Object.prototype

//? object.__proto__ === Object.protoype

//? fun.__proto__ === Function.protoype
//? fun.__proto__.proto === Object.protoype

let object2 = {
    name: "John",
}

//* object2's prototype now point to object
//* This means it has access to all of it properties. In case object2 doesn't have a specific prop, it will now look to object to find the specific prop
//? object2.__proto__ = object;
//? object2.name; / "John"
//? object2.city; / "LA"
//? object2.getIntro(); / "name LA"

//* SETTING A CUSTOM METHOD TO THE FUNCTION PROTOTYPE
//* Any function now has access to our myOwn function!
Function.prototype.myOwn = function(){
    console.log("Wow my own function!");
}

function fun2(){
}

fun.myOwn(); // "Wow my own function!"
fun2.myOwn(); // "Wow my own function!"