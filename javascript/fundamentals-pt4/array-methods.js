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

//TODO Shifting Elements

//? Shifting is equivalent to popping, but working on the first element instead of the last

//* JavaScript Array shift()
//? The shift() method removes the first array element and "shifts" all other elements to a lower index
//? The shift() method returns the value that was "shifted out"
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits6.shift()); //* Output: "Orange", "Apple", "Mango"

//* JavaScript Array unshift()
//? The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
//? The unshift() method returns the new array length
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.unshift("Lemon"); //* Output: 5

//TODO Changing Elements

//? Array elements are accessed using their index number
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8[0] = "Kiwi"; //* Fruits8 now equals: "Kiwi", "Orange", "Apple", "Mango"

//* JavaScript Array length
//? The length property provides an easy way to append a new element to an array:
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits9[fruits9.length] = "Kiwi"; //* Output: "Banana", "Orange", "Apple", "Mango", "Kiwi"

//* JavaScript Array delete()
//? Array elements can be deleted using the JavaScript operator delete
//! Using delete leaves undefined holes in the array
//? Use pop() or shift() instead
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits10[0]; //* Output: "Orange", "Apple", "Mango"
//? If you try to access index 0 again:
fruits10[0]; //! Output: undefined

//TODO Merging (Concatenating) Arrays

//* The concat() method creates a new array by merging (concatenating) existing arrays
//? The concat() method does not change the existing arrays. It always returns a new array
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys); //* Output: "Cecilie", "Lone", "Emil", "Tobias", "Linus"

//? The concat() method can take any number of array arguments:
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren2 = arr1.concat(arr2, arr3); //* Output: "Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin", "Morgan"

//? The concat() method can also take strings as arguments:
const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren3 = arr1.concat("Peter"); //* Output: "Emil", "Tobias", "Linus", "Peter"

//TODO Flattening an Array

//? Flattening an array is the process of reducing the dimensionality of an array

//* The flat() method creates a new array with sub-array elements concatenated to a specified depth
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); //* Output: 1,2,3,4,5,6

//TODO Splicing and Slicing Arrays

//? The splice() method adds new items to an array
//? The slice() method slices out a piece of an array

//* JavaScript Array splice()
//? The splice() method can be used to add new items to an array:
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
fruits11.splice(2, 0, "Lemon", "Kiwi"); //* Output: "Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"
//? The first parameter (2) defines the position where new elements should be added (spliced in)
//? The second parameter (0) defines how many elements should be removed
//? The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added

//? The splice() method returns an array with the deleted items:
const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
let spliceResult = fruits12.splice(2, 2, "Lemon", "Kiwi"); //* Output: "Lemon", "Kiwi"
//* New Array = "Banana", "Orange", "Lemon", "Kiwi"

//* Using splice() to Remove Elements
//? With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
const fruits13 = ["Banana", "Orange", "Apple", "Mango"];
fruits13.splice(0, 1); //* Output: "Orange", "Apple", "Mango"
//? The first parameter (0) defines the position where new elements should be added (spliced in)
//? The second parameter (1) defines how many elements should be removed
//? The rest of the parameters are omitted. No new elements will be added

//* JavaScript Array slice()
//? The slice() method slices out a piece of an array into a new array
//? This example slices out a part of an array starting from array element 1 ("Orange"):
const fruits14 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); //* Output: "Orange", "Lemon", "Apple", "Mango"

//? The slice() method creates a new array
//? The slice() method does not remove any elements from the source array
//? This example slices out a part of an array starting from array element 3 ("Apple"):
const fruits15 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits.slice(3); //* Output: "Apple", "Mango"

//? The slice() method can take two arguments like slice(1, 3)
//? The method then selects elements from the start argument, and up to (but not including) the end argument
const fruits16 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus3 = fruits.slice(1, 3); //* Output: "Orange", "Lemon"

//? If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array
const fruits17 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus4 = fruits.slice(2); //* Output: "Lemon", "Apple", "Mango"

//TODO Automatic toString()

//? JavaScript automatically converts an array to a comma separated string when a primitive value is expected
//? This is always the case when you try to output an array
//? All JavaScript objects have a toString() method
//? These two examples will produce the same result:
const fruits18 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits18.toString(); //* Output: The toString() method returns an array as a comma separated string

const fruits19 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits19; //* Output: JavaScript automatically converts an array to a comma separated string when a simple value is expected

//TODO JavaScript Sorting Arrays

//TODO LINK: https://www.w3schools.com/js/js_array_sort.asp

//TODO Sorting an Array

//? Sort()
//? The sort() method sorts an array alphabetically:

const fruits20 = ["Banana", "Orange", "Apple", "Mango"];
fruits20.sort(); //* Output: "Apple,Banana,Mango,Orange"

//TODO Reversing an Array

//? Reverse()
//? The reverse() method reverses the elements in an array
//? You can use it to sort an array in descending order

const fruits21 = ["Banana", "Orange", "Apple", "Mango"];
fruits21.sort();
fruits21.reverse();

//TODO Numeric Sort

//? By default, the sort() function sorts values as strings
//? However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1"
//? Because of this, the sort() method will produce incorrect result when sorting numbers

//? You can fix this by providing a compare function:
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

//TODO The Compare Function

//? The purpose of the compare function is to define an alternative sort order
//? The compare function should return a negative, zero, or positive value, depending on the arguments:
//* function(a, b){return a - b}

//? When the sort() function compares two values, it sends the values to the compare function
//? and sorts the values according to the returned (negative, zero, positive) value
//? If the result is negative, a is sorted before b
//? If the result is positive, b is sorted before a
//? If the result is 0, no changes are done with the sort order of the two values

//* Example:
//? The compare function compares all the values in the array, two values at a time (a, b)
//? When comparing 40 and 100, the sort() method calls the compare function(40, 100)
//? The function calculates 40 - 100 (a - b), and since the result is negative (-60)
//? the sort function will sort 40 as a value lower than 100

//? Math.max()
//? You can use Math.max.apply to find the highest number in an array:
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

//* Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3)

//? Math.min()
//? You can use Math.min.apply to find the lowest number in an array:
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

//* Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3)

//TODO JavaScript Array Iteration
//TODO LINK: https://www.w3schools.com/js/js_array_iteration.asp

//? Array iteration methods operate on every array item

//? forEach()
//? The forEach() method calls a function (a callback function) once for each array element

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}

//? Note that the function takes 3 arguments:
//? The item value
//? The item index
//? The array itself

//? The example above uses only the value parameter. The example can be rewritten to:

const numbers2 = [45, 4, 9, 16, 25];
let txt2 = "";
numbers2.forEach(myFunction);

function myFunction(value) {
  txt2 += value + "<br>";
}

//? map()

//? The map() method creates a new array by performing a function on each array element
//? The map() method does not execute the function for array elements without values
//? The map() method does not change the original array

//* This example multiplies each array value by 2:
const numbers3 = [45, 4, 9, 16, 25];
const numbers4 = numbers3.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}

//? Note that the function takes 3 arguments:
//? The item value
//? The item index
//? The array itself

//? When a callback function uses only the value parameter, the index and array parameters can be omitted:
const numbers5 = [45, 4, 9, 16, 25];
const numbers6 = numbers5.map(myFunction);

function myFunction(value) {
  return value * 2;
}

//? flatMap()

//? ES2019 added the Array flatMap() method to JavaScript
//? The flatMap() method first maps all elements of an array and then creates a new array by flattening the array

const myArr2 = [1, 2, 3, 4, 5, 6];
const newArr2 = myArr2.flatMap((x) => x * 2);

//? filter()

//? The filter() method creates a new array with array elements that pass a test

//* This example creates a new array from elements with a value larger than 18
const numbers7 = [45, 4, 9, 16, 25];
const over18 = numbers7.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//? Note that the function takes 3 arguments:
//? The item value
//? The item index
//? The array itself

//? In the example above, the callback function does not use the index and array parameters, so they can be omitted:
const numbers8 = [45, 4, 9, 16, 25];
const over18_2 = numbers8.filter(myFunction);

function myFunction(value) {
  return value > 18;
}