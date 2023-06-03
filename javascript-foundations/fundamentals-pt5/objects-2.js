//TODO: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

//* JavaScript object basics
//? An object is a collection of related data and/or functionality
//? These usually consist of several variables and functions
//? (which are called properties and methods when they are inside objects)

// Example:
const person = {
    name: ["John","Doe"],
    age: 40,
    bio: function(){
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`); 
    },
    introduceSelf: function(){
        console.log(`Hello I'm ${this.name[0]}`);
    }
};
// Consoling person object properties
console.log(person.name);
console.log(person.name[0]);
console.log(person.age);
person.bio();
person.introduceSelf();

//? An object is made up of multiple members, each of which has a name (e.g. name and age above), and a value (e.g. ['Bob', 'Smith'] and 32)
//? Each name/value pair must be separated by a comma
//? the name and value in each case are separated by a colon

// The syntax always follows this pattern:
// const objectName = {
//     member1Name: member1Value,
//     member2Name: member2Value,
//     member3Name: member3Value,
// };

//? The value of an object member can be pretty much anything
// in our person object we've got a number, an array, and two functions

//? The first two items are data items, and are referred to as the object's properties
//? The last two items are functions that allow the object to do something with that data, and are referred to as the object's methods

//? When the object's members are functions there's a simpler syntax
// Instead of bio: function () we can write bio(): 
const person2 = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
};
person2.bio();

//? An object like this is referred to as an object literal
//? we've literally written out the object contents as we've come to create it
//? This is different compared to objects instantiated from classes

//? It is very common to create an object using an object literal when you want to transfer a series of structured, related data items in some manner
// for example sending a request to the server to be put into a database
//? Sending a single object is much more efficient than sending several items individually
//? and it is easier to work with than an array, when you want to identify individual items by name

//* Dot Notation
//? Above, you accessed the object's properties and methods using dot notation
//? The object name (person) acts as the namespace
//? it must be entered first to access anything inside the object
//? Next you write a dot, then the item you want to access
//? this can be the name of a simple property, an item of an array property, or a call to one of the object's methods

//* Objects as object properties
//? An object property can itself be an object
// For example: 
// const person = {
//     name: ["Bob", "Smith"],
// };
// to
const person3 = {
    name: {
      first: "Bob",
      last: "Smith",
    },
    // …
};
// To access these items you just need to chain the extra step onto the end with another dot
console.log(person3.name.first);
console.log(person3.name.last);

//* Bracket Notation
//? Bracket notation provides an alternative way to access object properties instead of using dot notation
// Refer to object person starting in line 9
person["age"];
person["name"]["first"];

//? Instead of using an index number to select an item, you are using the name associated with each member's value
//? It is no wonder that objects are sometimes called associative arrays
//? they map strings to values in the same way that arrays map numbers to values

//! Dot notation is generally preferred over bracket notation because it is more succinct and easier to read
//! However there are some cases where you have to use brackets

//? For example, if an object property name is held in a variable
//? you can't use dot notation to access the value. But you can access the value using bracket notation

// In the example below, the logProperty() function can use person[propertyName] 
// to retrieve the value of the property named in propertyName
const person4 = {
    name: ["Jane", "Doe"],
    age: 30,
}
function logProperty(propertyName){
    console.log(person4[propertyName]);
}
logProperty("name");
logProperty("age");

//* Setting object members
//? You can also set (update) the value of object members by declaring the member you want to set
//? (using dot or bracket notation)
// For example:
// Refer to object person starting in line 9
person.age = 50;
person["name"]= "Dewey";
console.log(person.age);
console.log(person["name"]);

//? Setting members doesn't just stop at updating the values of existing properties and methods
//? you can also create completely new members
// For example:
// Refer to object person starting in line 9
person["eyes"] = "Hazel";
person.farewell = function(){
    console.log("Bye everybody");
}
console.log(person.eyes);
person.farewell();

//? One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names too

// Let's say we wanted users to be able to store custom value types in their people data, by typing the member name
// and value into two text inputs
//? We could get those values like this:
// const myDataName = nameInput.value;
// const myDataValue = nameValue.value;

//? We could then add this new member name and value to the person object like this:
const person5 = {};
const myDataName = "height";
const myDataValue = "1.75m";
person5[myDataName] = myDataValue;
console.log(person5.height);

//? Adding a property to an object using the method above isn't possible with dot notation
//? which can only accept a literal member name, not a variable value pointing to a name

//* What is "this"?
//? The this keyword refers to the current object the code is being written inside
//? so in this case this is equivalent to person. So why not just write person instead?
//? Well, when you only have to create a single object literal, it's not so useful
//? But if you create more than one, this enables you to use the same method definition for every object you create

// Let's illustrate what we mean with a simplified pair of person objects:
const person6 = {
    name: "Chris",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
};
  
const person7 = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
};

//* Introducing constructors
//? Using object literals is fine when you only need to create one object
//? but if you have to create more than one, as in the previous section, they're seriously inadequate
//? We have to write out the same code for every object we create
//? and if we want to change some properties of the object - like adding a height property
//? then we have to remember to update every object

//? We would like a way to define the "shape" of an object
//? the set of methods and the properties it can have
//? and then create as many objects as we like, just updating the values for the properties that are different

// The first version of this is just a function:
function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}
// This function creates and returns a new object each time we call it
// The object will have two members:
// a property name
// a method introduceSelf()

//? Note that createPerson() takes a parameter name to set the value of the name property
//? but the value of the introduceSelf() method will be the same for all objects created using this function
//? This is a very common pattern for creating objects

//? Now we can create as many objects as we like, reusing the definition:
const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();

//? This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it

//? A better way is to use a constructor
//? A constructor is just a function called using the "new" keyword

//? When you call a constructor, it will:
// create a new object
// bind "this" to the new object, so you can refer to "this" in your constructor code
// run the code in the constructor
// return the new object

//? Constructors, by convention, start with a capital letter and are named for the type of object they create

// We could rewrite our example like this:
function Person(name){
    this.name = name;
    this.introduceSelf = function(){
        console.log(`Hi! I'm ${this.name}.`);
    };
}

// To call Person() as a constructor, we use new:
const sally = new Person("Sally");
sally.name;
sally.introduceSelf();

const john = new Person("John");
john.name;
john.introduceSelf();

//* You've been using objects all along
//? As you've been going through these examples, you have probably been thinking that the dot notation you've been using is very familiar
//? Every time we've been working through an example that uses a built-in browser API or JavaScript object,
//? we've been using objects, because such features are built using exactly the same kind of object structures

// So when you used string methods like:
// myString.split(",");
//? You were using a method available on a String object

//? Every time you create a string in your code, that string is automatically created as an instance of String
//? and therefore has several common methods and properties available on it

// When you accessed the document object model using lines like this:
// const myDiv = document.createElement("div");
// const myVideo = document.querySelector("video");
//? You were using methods available on a Document object

//? For each webpage loaded, an instance of Document is created, called document
//? which represents the entire page's structure, content, and other features such as its URL
//? Again, this means that it has several common methods and properties available on it

//? The same is true of pretty much any other built-in object or API you've been using — Array, Math, and so on
//! Note that built in objects and APIs don't always create object instances automatically

//? As an example, the Notifications API. Which allows modern browsers to fire system notifications
//? requires you to instantiate a new object instance using the constructor for each notification you want to fire
// const myNotification = new Notification("Hello!");