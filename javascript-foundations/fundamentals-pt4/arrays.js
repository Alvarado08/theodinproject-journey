//* ARRAYS

//TODO LINK: https://www.w3schools.com/js/js_arrays.asp

//* An array is a special variable, which can hold more than one value
const cars = ["Saab", "Volvo", "BMW"];

//TODO Why Use Arrays?

//? If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

//? However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
//? The solution is an array!

//? An array can hold many values under a single name, and you can access the values by referring to an index number

//TODO Creating an Array

//? Using an array literal is the easiest way to create a JavaScript Array
//* const array_name = [item1, item2, ...];
//? It is a common practice to declare arrays with the const keyword

//? Spaces and line breaks are not important. A declaration can span multiple lines:
//* const cars = [
//*     "Saab",
//*     "Volvo",
//*     "BMW"
//*   ];

//? You can also create an array, and then provide the elements:
//* const cars = [];
//* cars[0]= "Saab";
//* cars[1]= "Volvo";
//* cars[2]= "BMW";

//TODO Using the JavaScript Keyword new

//? The following example also creates an Array, and assigns values to it:
//* const cars = new Array("Saab", "Volvo", "BMW");
//? There is no need to use new Array()
//? For simplicity, readability and execution speed, use the array literal method

//TODO Accessing Array Elements

//? You access an array element by referring to the index number:
//? Note: Array indexes start with 0
//? [0] is the first element. [1] is the second element
const cars2 = ["Saab", "Volvo", "BMW"];
let car = cars[0]; //* Output: "Saab"

//TODO Changing an Array Element

//? This statement changes the value of the first element in cars:
cars[0] = "Opel";
//* Example
const cars3 = ["Saab", "Volvo", "BMW"];
cars3[0] = "Opel"; //* Position 0 element now equals "Opel"

//TODO Access the Full Array

//? With JavaScript, the full array can be accessed by referring to the array name:
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
//* And/Or
console.log(cars);

//TODO Arrays are Objects

//? Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays
//? But, JavaScript arrays are best described as arrays
//? Arrays use numbers to access its "elements"

//? Objects use names to access its "members". In this example, person.firstName returns John:
const person = {firstName:"John", lastName:"Doe", age:46};

//TODO Array Elements Can Be Objects

//? JavaScript variables can be objects. Arrays are special kinds of objects
//? Because of this, you can have variables of different types in the same Array
//? You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

//TODO Array Properties and Methods

//? The real strength of JavaScript arrays are the built-in array properties and methods:
cars.length   //* Returns the number of elements
cars.sort()   //* Sorts the array

//* Length Property
//? The length property of an array returns the length of an array (the number of array elements)
//? Note: The length property is always one more than the highest array index
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length; //* Output: 4

//* Accessing the First Array Element
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits2[0]; //* Output: "Banana"

//* Looping Array Elements
//? One way to loop through an array, is using a for loop:
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo").innerHTML = text;

//? You can also use the Array.forEach() function:
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];

let text2 = "<ul>";
fruits4.forEach(myFunction);
text2 += "</ul>";

document.getElementById("demo").innerHTML = text2;

function myFunction(value) {
  text2 += "<li>" + value + "</li>";
}

//* Adding Array Elements
//? The easiest way to add a new element to an array is using the push() method:
const fruits5 = ["Banana", "Orange", "Apple"];
fruits5.push("Lemon");  //* Adds a new element (Lemon) to fruits

//? New element can also be added to an array using the length property:
const fruits6 = ["Banana", "Orange", "Apple"];
fruits6[fruits6.length] = "Lemon";  //* Adds "Lemon" to fruits

//! Adding elements with high indexes can create undefined "holes" in an array:
const fruits7 = ["Banana", "Orange", "Apple"];
fruits7[6] = "Lemon";  //* Creates undefined "holes" in fruits

//* Associative Arrays
//? Many programming languages support arrays with named indexes
//? Arrays with named indexes are called associative arrays (or hashes)
//? JavaScript does not support arrays with named indexes
//? In JavaScript, arrays always use numbered indexes
const person2 = [];
person2[0] = "John";
person2[1] = "Doe";
person2[2] = 46;
person2.length;    //* Will return 3
person2[0];        //* Will return "John"

//! If you use named indexes, JavaScript will redefine the array to an object
//! After that, some array methods and properties will produce incorrect results
//* const person = [];
//* person["firstName"] = "John";
//* person["lastName"] = "Doe";
//* person["age"] = 46;
//* person.length;     // Will return 0
//* person[0];         // Will return undefined

//TODO When to Use Arrays. When to use Objects

//? JavaScript does not support associative arrays
//? You should use objects when you want the element names to be strings (text)
//? You should use arrays when you want the element names to be numbers

//* JavaScript new Array()
//? JavaScript has a built-in array constructor new Array()
//? But you can safely use [] instead

//? These two different statements both create a new empty array named points:
const points = new Array();
const points2 = [];

//? These two different statements both create a new array containing 6 numbers:
const points3 = new Array(40, 100, 1, 5, 25, 10);
const points4 = [40, 100, 1, 5, 25, 10];

//! The new keyword can produce some unexpected results:
//* Create an array with three elements:
const points5 = new Array(40, 100, 1); 

//! Avoid using new Array()
//* Create an array with one element ???
const points6 = new Array(40); //* Output: ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

//! A Common Error:
//* const points = [40];
//? is not the same as:
//* const points = new Array(40);

//? Create an array with one element:
//* const points = [40];

//? Create an array with 40 undefined elements:
//* const points = new Array(40);

//TODO How to Recognize an Array
//? A common question is: How do I know if a variable is an array?
//? The problem is that the JavaScript operator typeof returns "object"
//? The typeof operator returns object because a JavaScript array is an object
const fruits8 = ["Banana", "Orange", "Apple"];
let type = typeof fruits8; //* Output: Object

//? Solution 1
//? To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray()
Array.isArray(fruits8); //* Output: true

//? Solution 2
//? The instanceof operator returns true if an object is created by a given constructor
const fruits9 = ["Banana", "Orange", "Apple"];

fruits instanceof Array; //* Output: true