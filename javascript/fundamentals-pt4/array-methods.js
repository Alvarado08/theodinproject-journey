//* JAVASCRIPT ARRAY METHODS

//TODO LINK: https://www.w3schools.com/js/js_array_methods.asp

//TODO Converting Arrays to Strings
//? The JavaScript method toString() converts an array to a string of (comma separated) array values
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
//* OR
console.log(fruits.toString()); //* Output: "Banana,Orange,Apple,Mango"

//* The join() method also joins all array elements into a string
//? It behaves just like toString(), but in addition you can specify the separator:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits2.join(" * ");
//* OR
console.log(fruits2.join()); //* Output: "Banana * Orange * Apple * Mango"

//TODO Popping and Pushing
//? When you work with arrays, it is easy to remove elements and add new elements
//? Popping items OUT of an array, or pushing items INTO an array

//* JavScript Array pop()
//? The pop() method removes the last element from an array:
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.pop();
//? The pop() method returns the value that was "popped out":
//* const fruits = ["Banana", "Orange", "Apple", "Mango"];
//* let fruit = fruits.pop();
//* console.log(fruit); // Output: "Mango"

//* JavScript Array push()
//? The push() method adds a new element to an array (at the end):
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.push("Kiwi");
document.getElementById("demo2").innerHTML = fruits;
//* OR
console.log(fruits4); //* Output: "Banana,Orange,Apple,Mango,Kiwi"

//? The push() method returns the new array length:
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5.push("Kiwi")); //* Output: 5