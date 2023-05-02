//TODO: https://javascript.info/object

//* What is an Object
//? An object can be created with figure brackets {…} with an optional list of properties
//? A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything
//? Imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key
//? It’s easy to find a file by its name or add/remove a file

//* Creating an Object
let user = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

//? Usually, the figure brackets {...} are used. That declaration is called an object literal

//* Literals and Properties
let user3 = {
    name: "John", // by key "name" store value "John"
    age: 30, // by key "age" store value 30
    "like birds": true,
}

//? A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it

//? In the user object, there are two properties:
// 1. The first property has the name "name" and the value "John"
// 2. The second one has the name "age" and the value 30

//? The resulting user object can be imagined as a cabinet with two signed files labeled “name” and “age”

//* Manipulating Properties
//? We can add, remove and read files from it at any time
//? Property values are accessible using the dot notation:

//? getting property values of the object:
console.log(user3.name);
console.log(user3.age);

//? The value can be of any type. Let’s add a boolean one:
user3.isAdmin = true;
console.log(user3);

//? To remove a property, we can use the delete operator:
delete user3.age;
console.log(user3);

//? We can also use multiword property names, but then they must be quoted:(line 19)

//? The last property in the list may end with a comma(line 19)

//? That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike

//* Square Brackets
//? For multiword properties, the dot access doesn’t work:
// this would give a syntax error
// user.likes birds = true

//? JavaScript doesn’t understand that. It thinks that we address user.likes. 
//? Gives a syntax error when comes across unexpected "birds"

//? The dot requires the key to be a valid variable identifier

//! That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed)

//? There’s an alternative “square bracket notation” that works with any string:
let user4 = {};
// set 
user4["like birds"] = true;
// get
console.log(user4["like birds"]); // true
// delete
delete user4["like birds"];

//? Now everything is fine. Please note that the string inside the brackets is properly quoted(any type of quote is fine)

//? Square brackets also provide a way to obtain the property name as the result of any expression - as opposed to a literal string
//? like from a variable

let key = "likes birds";
// same as user4["like birds"] = true;
user4[key] = true;

//? Here, the variable key may be calculated at run-time or depend on the user input
//? then we use it to access the property. That gives us a great deal of flexibility

// For instance: 
let user5 = {
    name: "Larry",
    age: "30"
}

let key2 = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")

//! The dot notation cannot be used in a similar way:

let key3 = "name";
alert( user.key ) // undefined

//* Computed Properties 
//? We can use square brackets in an object literal, when creating an object. That’s called computed properties

// For instance:
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

//? The meaning of a computed property is: [fruit] means that the property name should be taken from fruit

//? So, if a visitor enters "apple", bag will become {apple: 5}

// Essentially, that works the same as: bag[fruit] = 5

//? We can use more complex expressions inside square brackets:

let fruit2 = 'apple';
let bag2 = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

//? Square brackets are much more powerful than dot notation
//? They allow any property names and variables. But they are also more cumbersome to write

//? When property names are known and simple, the dot is used. 
//? if we need something more complex, then we switch to square brackets

//* Property value shorthand 
//? In real code, we often use existing variables as values for property names

// For instance:

function createUser(name,age){
    return {
        name: name,
        age: age,
        // ...other properties
    };
}
let user6 = createUser("John",45);
console.log(user6.name); // John

//? In the example above, properties have the same names as variables

//? The use-case of making a property from a variable is so common
//? there’s a special property value shorthand to make it shorter

// Instead of name:name we can just write name, like this:
function createUser2(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}

//? We can use both normal properties and shorthands in the same object:
// let user = {
//   name,  // same as name:name
//   age: 30
// };

//* Property names limitations
//? a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

//! But for an object property, there’s no such restriction:
// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};
console.log(obj.for + obj.let + obj.return);

//? there are no limitations on property names. They can be any strings or symbols (a special type for identifiers)
//? Other types are automatically converted to strings

// For instance, a number 0 becomes a string "0" when used as a property key:

let obj2 = {
    0: "test",
};
// both alerts access the same property (the number 0 is converted to string "0")
console.log(obj2["0"]); // test
console.log(obj2[0]); // test

//? There’s a minor gotcha with a special property named __proto__. 
//? We can’t set it to a non-object value:
let obj3 = {};
obj3.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
// the assignment to a primitive 5 is ignored

//* Property existence test, “in” operator
//? A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property
//? There will be no error if the property doesn’t exist!
//? Reading a non-existing property just returns undefined

// we can easily test whether the property exists:
let user7 = {};
alert( user7.noSuchProperty === undefined ); // true means "no such property"

//? There’s also a special operator "in"
//? The syntax is: "key" in object

// For instance:
let user8 = {
    name: "Jane",
    age: 25,
}
console.log("age" in user8); // true, user.age exists
console.log("blabla" in user8); // false, user.blabla doesn't exist

//? note that on the left side of in there must be a property name, usually a quoted string
//? If we omit quotes, that means a variable should contain the actual name to be tested
// For instance:
let user8Name = "name";
console.log(user8Name in user8); // true, property "name" exists

//? Why does the "in" operator exist?
//? most of the time the comparison with undefined works fine
//? But there’s a special case when it fails, but "in" works correctly

// It’s when an object property exists, but stores undefined:
let obj4 = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?
alert( "test" in obj ); // true, the property does exist!
//? In the code above, the property obj.test technically exists. So the in operator works right

//? Situations like this happen very rarely, because undefined should not be explicitly assigned
//? We mostly use null for “unknown” or “empty” values
//? So the "in" operator is an exotic guest in the code

//* The "for..in" loop
//? To walk over all keys of an object, there exists a special form of the loop: for..in
//? This is a completely different thing from the for(;;) construct 

//? Syntax
for (key in object) {
  // executes the body for each key among object properties
}

// For instance, let’s output all properties of user:
let user9 = {
    name: "Jacky",
    age: 50,
    isAdmin: true,
}

for(let key in user9){
    // keys
    console.log(key); // name, age, isAdmin
    // key values
    console.log(user9[key]); // Jacky, 50, true
    // console out keys with values
    console.log(`${key}: ${user9[key]}`);
}
//? Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here

//? we could use another variable name here instead of key
//? For instance, "for (let prop in obj)" is also widely used

//* Ordered like an object