//* LOOPS

//TODO LINK: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code

//? Programming languages are very useful for rapidly completing repetitive tasks, from multiple basic calculations
//? to just about any other situation where you've got a lot of similar items of work to complete

//TODO Why are loops useful?

//? Loops are all about doing the same thing over and over again
//? Often, the code will be slightly different each time round the loop, or the same code will run but with different variables

//TODO Looping through a collection

//? Most of the time when you use a loop, you will have a collection of items and want to do something with every item
//? One type of collection is the Array. But there are other collections in JavaScript as well, including Set and Map

//* The for...of loop

//? The basic tool for looping through a collection is the for...of loop:
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats) {
  console.log(cat);
}

//? In this example, for (const cat of cats) says:
//? 1. Given the collection cats, get the first item in the collection
//? 2. Assign it to the variable cat and then run the code between the curly brackets {}
//? 3. Get the next item, and repeat (2) until you've reached the end of the collection

//* map() and filter()

//? JavaScript also has more specialized loops for collections
//* You can use map() to do something to each item in a collection and create a new collection containing the changed items:
function toUpper(string) {
  return string.toUpperCase();
}

const cats2 = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const upperCats = cats2.map(toUpper);

console.log(upperCats);
//* Output: [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

//? Here we pass a function into cats.map(), and map() calls the function once for each item in the array, passing in the item
//? It then adds the return value from each function call to a new array, and finally returns the new array
//? In this case the function we provide converts the item to uppercase
//? so the resulting array contains all our cats in uppercase

//* You can use filter() to test each item in a collection, and create a new collection containing only items that match:
function lCat(cat) {
  return cat.startsWith('L');
}

const cats3 = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats3.filter(lCat);

console.log(filtered);
//* Output: [ "Leopard", "Lion" ]

//? This looks a lot like map(), except the function we pass in returns a boolean:
//? if it returns true, then the item is included in the new array
//? Our function tests that the item starts with the letter "L"
//? so the result is an array containing only cats whose names start with "L"

//? Note that map() and filter() are both often used with function expressions
//? Using function expressions we could rewrite the example above to be much more compact:
const cats4 = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered2 = cats4.filter((cat) => cat.startsWith('L'));
console.log(filtered2);
//* Output: [ "Leopard", "Lion" ]

//TODO The Standard for Loop

//? This has the following syntax:
for (initializer; condition; final-expression) {
  //* code to run
}

//? 1. The keyword for, followed by some parentheses
//? 2. Inside the parentheses we have three items, separated by semicolons:
//? i. An initializer — this is usually a variable set to a number, which is incremented to count
//? the number of times the loop has run. It is also sometimes referred to as a counter variable
//? ii. A condition — this defines when the loop should stop looping. This is generally an expression featuring a comparison operator
//? a test to see if the exit condition has been met
//? iii. A final-expression — this is always evaluated (or run) each time the loop has gone through a full iteration
//? It usually serves to increment (or in some cases decrement) the counter variable
//? to bring it closer to the point where the condition is no longer true
//? 3. Some curly braces that contain a block of code — this code will be run each time the loop iterates

//* Calculating Squares
const results = document.querySelector('#results');

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += '\nFinished!';
}

const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');

calculateBtn.addEventListener('click', calculate);
clearBtn.addEventListener('click', () => results.textContent = '');
//? This code calculates squares for the numbers from 1 to 9, and writes out the result
//? The core of the code is the for loop that performs the calculation

//? Let's break down the for (let i = 1; i < 10; i++) line into its three pieces:
//? 1. let i = 1: the counter variable, i, starts at 1
//? Note that we have to use let for the counter, because we're reassigning it each time we go round the loop
//? 2. i < 10: keep going round the loop for as long as i is smaller than 10
//? 3. i++: add one to i each time round the loop

//? Inside the loop, we calculate the square of the current value of i, that is: i * i
//? We create a string expressing the calculation we made and the result, and add this string to the output text
//? We also add \n, so the next string we add will begin on a new line. So:
//? 1. During the first run, i = 1, so we will add 1 x 1 = 1
//? 2. During the second run, i = 2, so we will add 2 x 2 = 4
//? 3. And so on…
//? 4. When i becomes equal to 10 we will stop running the loop and move straight to the next bit of code below the loop
//? printing out the Finished! message on a new line

//* Looping through collections with a for loop

//? You can use a for loop to iterate through a collection, instead of a for...of loop
const cats5 = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (let i = 0; i < cats5.length; i++) {
  console.log(cats[i]);
}
//? In this loop we're starting i at 0, and stopping when i reaches the length of the array
//? Then inside the loop, we're using i to access each item in the array in turn

//? This works just fine, and in early versions of JavaScript, for...of didn't exist
//? so this was the standard way to iterate through an array
//! However, it offers more chances to introduce bugs into your code. For example:
//? you might start i at 1, forgetting that the first array index is zero, not 1
//? you might stop at i <= cats.length, forgetting that the last array index is at length - 1
//? For reasons like this, it's usually best to use for...of if you can

//? Sometimes you still need to use a for loop to iterate through an array. For example, in the code below we want to log a message listing our cats:
const cats6 = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (const cat of cats6) {
  myFavoriteCats += `${cat}, `
}

console.log(myFavoriteCats); //* Output: "My cats are called Pete, Biggles, Jasmine, "

//? The final output sentence isn't very well-formed:
//* My cats are called Pete, Biggles, Jasmine,
//? We'd prefer it to handle the last cat differently, like this:
//* My cats are called Pete, Biggles, Jasmine.

//? But to do this we need to know when we are on the final loop iteration
//? and to do that we can use a for loop and examine the value of i:
const cats7 = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats2 = 'My cats are called ';

for (let i = 0; i < cats7.length; i++) {
  if (i === cats7.length - 1) {   //* We are at the end of the array
    myFavoriteCats2 += `and ${cats7[i]}.`
  } else {
    myFavoriteCats2 += `${cats7[i]}, `
  }
}

console.log(myFavoriteCats2); //* Output: "My cats are called Pete, Biggles, and Jasmine."

//TODO Exiting loops with break
//? If you want to exit a loop before all the iterations have been completed, you can use the break statement
//? the break statement immediately exits the switch statement and moves on to the code after it
//? It's the same with loops — a break statement will immediately exit the loop and make the browser move on to any code that follows it

//? Say we wanted to search through an array of contacts and telephone numbers and return just the number we wanted to find?
//? First, some simple HTML — a text <input> allowing us to enter a name to search for, a <button> element to submit a search
//? and a <p> element to display the results in:
//* <label for="search">Search by contact name: </label>
//* <input id="search" type="text" />
//* <button>Search</button>
//* <p></p> 

//? Now on to the JavaScript:
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  para.textContent = '';
  for (const contact of contacts) {
    const splitContact = contact.split(':');
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === '') {
   para.textContent = 'Contact not found.';
 }
});

//? 1. First of all, we have some variable definitions — we have an array of contact information, with
//? each item being a string containing a name and phone number separated by a colon
//? 2. Next, we attach an event listener to the button (btn) so that when it is pressed some code 
//? is run to perform the search and return the results
//? 3. We store the value entered into the text input in a variable called searchName, before then 
//? emptying the text input and focusing it again ready for the next search
//? Note that we also run the toLowerCase() method on the string, so that searches will be case-insensitive
//? 4. Now on to the interesting part, the for...of loop:
//? i. Inside the loop, we first split the current contact at the colon character
//? and store the resulting two values in an array called splitContact
//? ii. We then use a conditional statement to test whether splitContact[0] (the contact's name, again lower-cased with toLowerCase()) 
//? is equal to the inputted searchName. If it is, we enter a string into the paragraph to report what 
//? the contact's number is, and use break to end the loop
//? 5. After the loop, we check whether we set a contact, and if not we set the paragraph text to "Contact not found.".

//* Skipping iterations with continue

//? The continue statement works similarly to break, but instead of breaking out of the loop entirely 
//? it skips to the next iteration of the loop
//? Let's look at another example that takes a number as an input, and returns only the numbers that are squares of integers (whole numbers)

//? The HTML is basically the same as the last example — a simple text input, and a paragraph for output:
//* <label for="number">Enter number: </label>
//* <input id="number" type="text" />
//* <button>Generate integer squares</button>
//* <p>Output:</p>

//* The JavaScript is mostly the same too, although the loop itself is a bit different:
const para2 = document.querySelector('p');
const input2 = document.querySelector('input');
const btn2 = document.querySelector('button');

btn.addEventListener('click', () => {
  para2.textContent = 'Output: ';
  const num = input2.value;
  input2.value = '';
  input2.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para2.textContent += `${i} `;
  }
});

//? 1. In this case, the input should be a number (num)
//? The for loop is given a counter starting at 1 (as we are not interested in 0 in this case), an exit condition 
//? that says the loop will stop when the counter becomes bigger than the input num
//? and an iterator that adds 1 to the counter each time
//? 2. Inside the loop, we find the square root of each number using Math.sqrt(i)
//? then check whether the square root is an integer by testing whether it is the same as itself
//? when it has been rounded down to the nearest integer (this is what Math.floor() does to the number it is passed)
//? 3. If the square root and the rounded down square root do not equal one another (!==)
//? it means that the square root is not an integer, so we are not interested in it
//? n such a case, we use the continue statement to skip on to the next loop iteration without recording the number anywhere
//? 4. If the square root is an integer, we skip past the if block entirely, so the continue statement is not executed
//? instead, we concatenate the current i value plus a space at the end of the paragraph content

//TODO while and do...while

//? for is not the only type of loop available in JavaScript
//? There are actually many others and, while you don't need to understand all of these now
//? it is worth having a look at the structure of a couple of others
//? so that you can recognize the same features at work in a slightly different way

//* While Loop

//* First, let's have a look at the while loop. This loop's syntax looks like so:
initializer
while (condition) {
  // code to run

  final-expression
}
//? This works in a very similar way to the for loop, except that the initializer variable is set before the loop
//? and the final-expression is included inside the loop after the code to run
//? rather than these two items being included inside the parentheses
//? The condition is included inside the parentheses, which are preceded by the while keyword rather than for

//? The same three items are still present, and they are still defined in the same order as they are in the for loop
//? This is because you must have an initializer defined before you can check whether or not the condition is true
//? The final-expression is then run after the code inside the loop has run (an iteration has been completed)
//? which will only happen if the condition is still true

//* Let's have a look again at our cats list example, but rewritten to use a while loop:
const cats8 = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats3 = 'My cats are called ';

let i = 0;

while (i < cats8.length) {
  if (i === cats8.length - 1) {
    myFavoriteCats3 += `and ${cats8[i]}.`;
  } else {
    myFavoriteCats3 += `${cats8[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats3); //* Output: "My cats are called Pete, Biggles, and Jasmine."

//* Do...While Loop

//* The do...while loop is very similar, but provides a variation on the while structure:
initializer
do {
  // code to run

  final-expression
} while (condition)

//? In this case, the initializer again comes first, before the loop starts
//? The keyword directly precedes the curly braces containing the code to run and the final expression

//? The main difference between a do...while loop and a while loop is that the code inside a do...while loop 
//? is always executed at least once. That's because the condition comes after the code inside the loop
//? So we always run that code, then check to see if we need to run it again
//? In while and for loops, the check comes first, so the code might never be executed

//* Let's rewrite our cat listing example again to use a do...while loop:
const cats9 = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats4 = 'My cats are called ';

let i2 = 0;

do {
  if (i2 === cats9.length - 1) {
    myFavoriteCats4 += `and ${cats9[i]}.`;
  } else {
    myFavoriteCats4 += `${cats9[i]}, `;
  }

  i2++;
} while (i2 < cats9.length);

console.log(myFavoriteCats4); //* Output: "My cats are called Pete, Biggles, and Jasmine."

//! With while and do...while — as with all loops — you must make sure that the initializer is incremented 
//! or, depending on the case, decremented, so the condition eventually becomes false
//! If not, the loop will go on forever, and either the browser will force it to stop, or it will crash 
//! This is called an infinite loop

//TODO Active Learning

//* 1. Launch Countdown

//? Solution:
//* let output = document.querySelector('.output');
//* output.innerHTML = '';

//* let i = 10;
//* const para = document.createElement('p');

//* for(i; i > 0; i--){
//* 	if(i === 10){
//* 		para.textContent += `Countdown ${i}`;
//* 		continue;
//* }
//* 	para.textContent += `\n${i}`;
//* 	output.appendChild(para);
//* }
//* para.textContent += "\nBlast off!";

//* 2. Filling in a guest list

//? Solution:
//* const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

//* const admitted = document.querySelector('.admitted');
//* const refused = document.querySelector('.refused');
//* admitted.textContent = 'Admit: ';
//* refused.textContent = 'Refuse: ';

//* // loop starts here
//* // Loop through people
//* // Conditional to find Phil and Lola
//* // If found, append to refused
//* // If not found, append to admitted

//* for(let i = 0; i < people.length; i++){
//* 	if(people[i] === "Phil" || people[i] === "Lola"){
//* 	refused.textContent += `\n${people[i]},`; 
//* }else{
//* 	admitted.textContent += `\n${people[i]},`;
//* }
//* }
//* refused.textContent = refused.textContent.slice(0, refused.textContent.length-1) + ".";
//* admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-1) + ".";

//TODO Which loop type should you use?

//? If you're iterating through an array or some other object that supports it, and don't need access to 
//? the index position of each item, then for...of is the best choice. It's easier to read and there's less to go wrong

//? For other uses, for, while, and do...while loops are largely interchangeable
//? They can all be used to solve the same problems, and which one you use will largely depend on your personal preference
//? which one you find easiest to remember or most intuitive
//? We would recommend for, at least to begin with, as it is probably the easiest for remembering everything
//? the initializer, condition, and final-expression all have to go neatly into the parentheses
//? so it is easy to see where they are and check that you aren't missing them

//? Note: There are other loop types/features too, which are useful in advanced/specialized situations