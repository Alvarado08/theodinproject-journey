//* FUNCTIONS

//TODO LINK: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions 
//* Functions — reusable blocks of code
//? Another essential concept in coding is functions, which allow you to store a piece of code
//? that does a single task inside a defined block
//? and then call that code whenever you need it using a single short command
//? rather than having to type out the same code multiple times
//* Where do I find functions?
//? In JavaScript, you'll find functions everywhere
//? Pretty much anytime you make use of a JavaScript structure that features a pair of parentheses 
//? and you're not using a common built-in language structure like a for loop, while or do...while loop
//? or if...else statement, you are making use of a function
//* Built in browser functions 
//? Every time we manipulated a text string, for example, or every time we manipulated an array
//? We were using a function!
//* ex. const myText = 'I am a string';
//* const newString = myText.replace('string', 'sausage');
//* console.log(newString);
//? The JavaScript language has many built-in functions to allow you to do useful things 
//? without having to write all that code yourself
//? In fact, some of the code you are calling when you invoke (a fancy word for run, or execute)
//? a built in browser function couldn't be written in JavaScript
//? many of these functions are calling parts of the background browser code
//? which is written largely in low-level system languages like C++, not web languages like JavaScript
//? Bear in mind that some built-in browser functions are not part of the core JavaScript language
//? some are defined as part of browser APIs, which build on top of the default language 
//? to provide even more functionality

//* Functions vs methods
//? Functions that are part of objects are called methods
//? Anytime you saw a custom name with parentheses straight after it, you were using a custom function
//? This function draws 100 random circles inside a <canvas> element
//* ex. function draw() {
//*     ctx.clearRect(0,0,WIDTH,HEIGHT);
//*     for (let i = 0; i < 100; i++) {
//*       ctx.beginPath();
//*       ctx.fillStyle = 'rgba(255,0,0,0.5)';
//*       ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//*       ctx.fill();
//*     }
//* }  
//? Every time we want to do that, we can just invoke the function with this 
//? rather than having to write all that code out again every time we want to repeat it
//? Functions can contain whatever code you like
//? you can even call other functions from inside functions
//* draw();
//* Invoking functions
//? To actually use a function after it has been defined, you've got to run — or invoke — it
//? This is done by including the name of the function in the code somewhere, followed by parentheses
//* ex. function myFunction() {
//*     alert('hello');
//*   }
  
//*   myFunction();
//*   // calls the function once
//? This form of creating a function is also known as function declaration
//? It is always hoisted, so you can call function above function definition and it will work fine

//* Function parameters
//? Some functions require parameters to be specified when you are invoking them
//? these are values that need to be included inside the function parentheses
//? which it needs to do its job properly
//? The browser's built-in string replace() function needs two parameters
//? the substring to find in the main string, and the substring to replace that string with
//* ex. const myText = 'I am a string';
//* const newString = myText.replace('string', 'sausage');
//? When you need to specify multiple parameters, they are separated by commas
//* Optional parameters
//? Sometimes parameters are optional — you don't have to specify them
//? If you don't, the function will generally adopt some kind of default behavior
//? As an example, the array join() function's parameter is optional
//* const myArray = ['I', 'love', 'chocolate', 'frogs'];
//* const madeAString = myArray.join(' ');
//* console.log(madeAString);
//* // returns 'I love chocolate frogs'
//* const madeAnotherString = myArray.join();
//* console.log(madeAnotherString);
//* // returns 'I,love,chocolate,frogs'
//? If no parameter is included to specify a joining/delimiting character, a comma is used by default
//* Default parameters
//? If you're writing a function and want to support optional parameters
//? you can specify default values by adding = after the name of the parameter, followed by the default value
//* function hello(name = 'Chris') {
//*     console.log(`Hello ${name}!`);
//*   }
//*   hello('Ari'); // Hello Ari!
//*   hello();      // Hello Chris!  

//* Anonymous functions and arrow functions
//? You can also create a function that doesn't have a name
//* (function () {
//*     alert('hello');
//* })
//? This is called an anonymous function, because it has no name
//? You'll often see anonymous functions when a function expects to receive another function as a parameter
//? This form of creating a function is also known as function expression
//? Unlike function declaration, function expressions are not hoisted
//? For example, let's say you want to run some code when the user types into a text box
//? To do this you can call the addEventListener() function of the text box
//? This function expects you to pass it (at least) two parameters:
//? the name of the event to listen for, which in this case is keydown a function to run when the event happens
//? When the user presses a key, the browser will call the function you provided
//? and will pass it a parameter containing information about this event
//? including the particular key that the user pressed
//* function logKey(event) {
//*     console.log(`You pressed "${event.key}".`);
//*   }
//*   textBox.addEventListener('keydown', logKey);  
//? Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener()
//* textBox.addEventListener('keydown', function(event) {
//*     console.log(`You pressed "${event.key}".`);
//*   });
//* Arrow functions
//? If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function
//? Instead of function(event), you write (event) =>
//* textBox.addEventListener('keydown', (event) => {
//*     console.log(`You pressed "${event.key}".`);
//*   });
//? If the function only has one line in the curly brackets, you omit the curly brackets 
//* textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));
//? If the function only takes one parameter, you can also omit the brackets around the parameter
//* textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));
//? Finally, if your function needs to return a value, and contains only one line
//? you can also omit the return statement
//! We recommend that you use arrow functions, as they can make your code shorter and more readable

//* Function scope and conflicts
//? When you create a function, the variables and other things defined inside the function 
//? are inside their own separate scope
//? meaning that they are locked away in their own separate compartments
//? unreachable from code outside the functions
//? The top level outside all your functions is called the global scope
//? Values defined in the global scope are accessible from everywhere in the code
//? JavaScript is set up like this for various reasons — but mainly because of security and organization
//? Sometimes you don't want variables to be accessible from everywhere in the code
//? external scripts that you call in from elsewhere could start to mess with your code and cause problems
//? because they happen to be using the same variable names as other parts of the code, causing conflicts
//? This might be done maliciously, or just by accident
//? Keeping parts of your code locked away in functions avoids such problems, and is considered the best practice
//? It is a bit like a zoo. The lions, zebras, tigers, and penguins are kept in their own enclosures
//? and only have access to the things inside their enclosures — in the same manner as the function scopes
//? If they were able to get into other enclosures, problems would occur
//? The zoo keeper is like the global scope — they have the keys to access every enclosure
//? to restock food, tend to sick animals, etc.
//* Real example to demonstrate scoping
//? This contains two functions called a() and b(), and three variables — x, y, and z 
//? two of which are defined inside the functions and one in the global scope
//? It also contains a third function called output(), which takes a single parameter 
//? and outputs it in a paragraph on the page
//* Open the JavaScript console in your browser developer tools. 
//* In the JavaScript console, enter the following command
//* output(x);
//* You should see the value of variable x printed to the browser viewport
//* Now try entering the following in your console
//* output(y);
//* output(z);
//! Both of these should throw an error into the console along the lines of "ReferenceError: y is not defined"
//? Why is that? Because of function scope — y and z are locked inside the a() and b() functions
//? so output() can't access them when called from the global scope
//? However, what about when it's called from inside another function?
//? Try editing a() and b() so they look like this
//* function a() {
//*     const y = 2;
//*     output(y);
//*   }
//*   function b() {
//*     const z = 3;
//*     output(z);
//*   }
//? Save the code and reload it in your browser, then try calling the a() and b() functions 
//? from the JavaScript console
//* a();
//* b();
//? You should see the y and z values printed in the browser viewport 
//? This works fine, as the output() function is being called inside the other functions
//? in the same scope as the variables it is printing are defined in, in each case
//? output() itself is available from anywhere, as it is defined in the global scope
//? Now try updating your code like this
//* function a() {
//*     const y = 2;
//*     output(x);
//*   } 
//*   function b() {
//*     const z = 3;
//*     output(x);
//*   }  
//? Save and reload again, and try this again in your JavaScript console
//* a();
//* b();
//? Both the a() and b() call should print the value of x to the browser viewport
//? These work fine because even though the output() calls are not in the same scope as x is defined in
//? x is a global variable so is available inside all code, everywhere
//? Finally, try updating your code like this
//* function a() {
//*     const y = 2;
//*     output(z);
//*   }
//*   function b() {
//*     const z = 3;
//*     output(y);
//*   }  
//? Save and reload again, and try this again in your JavaScript console
//* a();
//* b();
//! This time the a() and b() calls will throw that annoying ReferenceError: variable name is not defined error into the console
//? This is because the output() calls and the variables they are trying to print are not in the same function scopes
//? the variables are effectively invisible to those function calls
//? The same scoping rules do not apply to loop (e.g. for() { }) and conditional blocks (e.g. if () { })
//? they look very similar, but they are not the same thing! Take care not to get these confused
//! The ReferenceError: "x" is not defined error is one of the most common you'll encounter
//? If you get this error and you are sure that you have defined the variable in question, check what scope it is in

//TODO LINK: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values
//* Function return values
//? There's one last essential concept about functions for us to discuss — return values
//? Some functions don't return a significant value, but others do
//? It's important to understand what their values are, how to use them in your code
//? and how to make functions return useful values
//* What are return values?
//? Return values are just what they sound like — the values that a function returns when it completes
//? When the function completes (finishes running), it returns a value
//? Some functions don't return any value. (In these cases, our reference pages list the return value as void or undefined.)
//? Generally, a return value is used where the function is an intermediate step in a calculation of some kind
//? You want to get to a final result, which involves some values that need to be calculated by a function
//? After the function calculates the value, it can return the result so it can be stored in a variable
//? and you can use this variable in the next stage of the calculation
//* Using return values in your own functions
//? To return a value from a custom function, you need to use the return keyword
//? random() function, to generate a random value
//* ex. function random(number) {
//*     const result = Math.floor(Math.random() * number);
//*     return result;
//*   }  
//? We are returning the result of the calculation Math.floor(Math.random() * number) each time the function is called
//? This return value appears at the point the function was called, and the code continues

//TODO LINK: https://javascript.info/function-basics
//* Functions
//? Quite often we need to perform a similar action in many places of the script
//? For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else
//? Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition
//? We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question)
//? But we can create functions of our own as well

//* Local variables 
//? A variable declared inside a function is only visible inside that function
//* ex. function showMessage() {
//*     let message = "Hello, I'm JavaScript!"; // local variable 
//*     alert( message );
//*   }
//*   showMessage(); // Hello, I'm JavaScript!  
//*   alert( message ); // <-- Error! The variable is local to the function

//* Outer variables 
//? A function can access an outer variable as well
//* let userName = 'John';

//* function showMessage() {
//*   let message = 'Hello, ' + userName;
//*   alert(message);
//* }
//* showMessage(); // Hello, John
//? The function has full access to the outer variable. It can modify it as well
//* let userName = 'John';

//* function showMessage() {
//*   userName = "Bob"; // (1) changed the outer variable

//*   let message = 'Hello, ' + userName;
//*   alert(message);
//* }
//* alert( userName ); // John before the function call
//* showMessage();
//* alert( userName ); // Bob, the value was modified by the function
//? The outer variable is only used if there’s no local one
//? If a same-named variable is declared inside the function then it shadows the outer one
//? For instance, in the code below the function uses the local userName. The outer one is ignored
//* let userName = 'John';

//* function showMessage() {
//*   let userName = "Bob"; // declare a local variable

//*   let message = 'Hello, ' + userName; // Bob
//*   alert(message);
//* }
//* // the function will create and use its own userName
//* showMessage();
//* alert( userName ); // John, unchanged, the function did not access the outer variable
//? Variables declared outside of any function, such as the outer userName in the code above, are called global
//? Global variables are visible from any function (unless shadowed by locals)
//? It’s a good practice to minimize the use of global variables
//? Modern code has few or no globals. Most variables reside in their functions
//? Sometimes though, they can be useful to store project-level data

//* Parameters
//? When a value is passed as a function parameter, it’s also called an argument
//? A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term)
//? An argument is the value that is passed to the function when it is called (it’s a call time term)
//? We declare functions listing their parameters, then call them passing arguments
//* function showMessage(from, text) { // parameters: from, text
//*     alert(from + ': ' + text);
//*   }
//*   showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
//*   showMessage('Ann', "What's up?"); // Ann: What's up? (**)

//* Alternative default parameters
//? Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration
//? We can check if the parameter is passed during the function execution, by comparing it with undefined
//? In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter
//? Several years ago, JavaScript didn’t support the syntax for default parameters
//? So people used other ways to specify them
//? Nowadays, we can come across them in old scripts
//? For example, an explicit check for undefined
//* function showMessage(from, text) {
//*     if (text === undefined) {
//*       text = 'no text given';
//*     }
//*     alert( from + ": " + text );
//*   }
//? Or using the || operator:
//* function showMessage(from, text) {
//*     // If the value of text is falsy, assign the default value
//*     // this assumes that text == "" is the same as no text at all
//*     text = text || 'no text given';
//*   }
//? Modern JavaScript engines support the nullish coalescing operator ??, it’s better when most falsy values
//? such as 0, should be considered “normal”

//* Returning a value
//? A function can return a value back into the calling code as the result
//? The simplest example would be a function that sums two values
//* function sum(a, b) {
//*     return a + b;
//*   } 
//*   let result = sum(1, 2);
//*   alert( result ); // 3
//? The directive return can be in any place of the function
//? When the execution reaches it, the function stops, and the value is returned to the calling code
//? There may be many occurrences of return in a single function:
//* function checkAge(age) {
//*     if (age >= 18) {
//*       return true;
//*     } else {
//*       return confirm('Do you have permission from your parents?');
//*     }
//*   }
//*   let age = prompt('How old are you?', 18); 
//*   if ( checkAge(age) ) {
//*     alert( 'Access granted' );
//*   } else {
//*     alert( 'Access denied' );
//*   }
//? It is possible to use return without a value. That causes the function to exit immediately
//* function showMovie(age) {
//*     if ( !checkAge(age) ) {
//*       return;
//*     }
//*     alert( "Showing you the movie" ); // (*)
//*     // ...
//*   }
//? In the code above, if checkAge(age) returns false, then showMovie won’t proceed to the alert
//? A function with an empty return or without it returns undefined
//? If a function does not return a value, it is the same as if it returns undefined
//* function doNothing() { /* empty */ }
//* alert( doNothing() === undefined ); // true
//? An empty return is also the same as return undefined
//* function doNothing() {
//*     return;
//*   }
//* alert( doNothing() === undefined ); // true
//? Never add a newline between return and the value
//? For a long expression in return, it might be tempting to put it on a separate line, like this
//* return
//*  (some + long + expression + or + whatever * f(a) + f(b))
//? That doesn’t work, because JavaScript assumes a semicolon after return
//? So, it effectively becomes an empty return
//? If we want the returned expression to wrap across multiple lines, we should start it at the same line as return
//? Or at least put the opening parentheses there as follows:
//* return (
//*     some + long + expression
//*     + or +
//*     whatever * f(a) + f(b)
//*     )

//* Naming a function
//? Functions are actions. So their name is usually a verb
//? It should be brief, as accurate as possible and describe what the function does
//? so that someone reading the code gets an indication of what the function does
//? It is a widespread practice to start a function with a verbal prefix which vaguely describes the action
//? There must be an agreement within the team on the meaning of the prefixes
//? For instance, functions that start with "show" usually show something
//? "get…" – return a value
//? "calc…" – calculate something
//? "create…" – create something
//? "check…" – check something and return a boolean, etc.
//* showMessage(..)     // shows a message
//* getAge(..)          // returns the age (gets it somehow)
//* calcSum(..)         // calculates a sum and returns the result
//* createForm(..)      // creates a form (and usually returns it)
//* checkPermission(..) // checks a permission, returns true/false
//? With prefixes in place, a glance at a function name gives an understanding 
//? what kind of work it does and what kind of value it returns
//? A function should do exactly what is suggested by its name, no more
//? Two independent actions usually deserve two functions, even if they are usually called together
//* getAge – would be bad if it shows an alert with the age (should only get)
//* createForm – would be bad if it modifies the document, adding a form to it (should only create it and return)
//* checkPermission – would be bad if it displays the access granted/denied message 
//* (should only perform the check and return the result)
//? Functions that are used very often sometimes have ultrashort names
//? For example, the jQuery framework defines a function with $. The Lodash library has its core function named _
//? These are exceptions. Generally function names should be concise and descriptive

//* Functions == Comments
//? Functions should be short and do exactly one thing 
//? If that thing is big, maybe it’s worth it to split the function into a few smaller functions
//? Sometimes following this rule may not be that easy, but it’s definitely a good thing
//? A separate function is not only easier to test and debug – its very existence is a great comment!
//? Functions can be created even if we don’t intend to reuse them. They structure the code and make it readable
//* function showPrimes(n) {

//*     for (let i = 2; i < n; i++) {
//*       if (!isPrime(i)) continue;
  
//*       alert(i);  // a prime
//*     }
//*   }
  
//*   function isPrime(n) {
//*     for (let i = 2; i < n; i++) {
//*       if ( n % i == 0) return false;
//*     }
//*     return true;
//*   }

//* Fundamentals Pt.3 definition and example
//? Parameters and arguments in the context of the following example function
//* function favoriteAnimal(animal) {
//*     return animal + " is my favorite animal!"
//*   }
 
//*   console.log(favoriteAnimal('Goat'));
//? In JavaScript, parameters are the items listed between the parentheses in the function declaration
//? Function arguments are the actual values we decide to pass to the function
//? In the example above, the parameter, animal, is found inside the parentheses
//? In this case, naming the parameter animal gives someone reading our code a bit of context
//? By putting animal inside the parentheses of the favoriteAnimal() function
//? we are telling JavaScript that we will send some value to our favoriteAnimal function
//? This means that animal is just a placeholder for some future value
//? The last line, favoriteAnimal('Goat'), is where we are calling our favoriteAnimal function
//? and passing the value 'Goat' inside that function
//? Here, 'Goat' is our argument
//? Because of the flexibility that using a parameter provides, we can declare any animal to be our favorite
//?  If we just called the function without console.logging what it returns
//? nothing would appear in the console but nonetheless the function would return that string

//TODO LINK: https://javascript.info/function-expressions
//* Function expressions 
//? In JavaScript, a function is not a “magical language structure”, but a special kind of value
//? There is another syntax for creating a function that is called a Function Expression
//? It allows us to create a new function in the middle of any expression
//* let sayHi = function() {
//*   alert( "Hello" );
//* }; 
//? Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }
//? As the function creation happens in the context of the assignment expression (to the right side of =)
//? this is a Function Expression
//? Please note, there’s no name after the function keyword. Omitting a name is allowed for Function Expressions
//? Here we immediately assign it to the variable, so the meaning of these code samples is the same
//? "create a function and put it into the variable sayHi"

//* Function is a value 
//? Let’s reiterate: no matter how the function is created, a function is a value
//? In JavaScript, a function is a value, so we can deal with it as a value
//? Surely, a function is a special value, in the sense that we can call it like sayHi()
//? But it’s still a value. So we can work with it like with other kinds of values
//? We can copy a function to another variable
//* function sayHi() {   // (1) create
//*   alert( "Hello" );
//* }
//* let func = sayHi;    // (2) copy
//* func(); // Hello     // (3) run the copy (it works)!
//* sayHi(); // Hello    //     this still works too (why wouldn't it)
//? The Function Declaration (1) creates the function and puts it into the variable named sayHi.
//? Line (2) copies it into the variable func. Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.
//? Now the function can be called as both sayHi() and func()
//? We could also have used a Function Expression to declare sayHi, in the first line
//* let sayHi = function() { // (1) create
//*   alert( "Hello" );
//* };
//* let func = sayHi;
//? Why is there a semicolon at the end?
//? You might wonder, why do Function Expressions have a semicolon ; at the end, but Function Declarations do not
//* let sayHi = function() {
//* };
//? The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement
//? let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax
//? The semicolon would be there for a simpler assignment, such as let sayHi = 5; 
//? and it’s also there for a function assignment

//* Callback functions
//* function ask(question, yes, no) {
//*   if (confirm(question)) yes()
//*   else no();
//* }

//* function showOk() {
//*   alert( "You agreed." );
//* }

//* function showCancel() {
//*   alert( "You canceled the execution." );
//* }

//* // usage: functions showOk, showCancel are passed as arguments to ask
//* ask("Do you agree?", showOk, showCancel);
//? The arguments showOk and showCancel of ask are called callback functions or just callbacks
//? The idea is that we pass a function and expect it to be “called back” later if necessary
//? In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer
//? We can use Function Expressions to write an equivalent, shorter function
//* function ask(question, yes, no) {
//*     if (confirm(question)) yes()
//*     else no();
//*   }
  
//*   ask(
//*     "Do you agree?",
//*     function() { alert("You agreed."); },
//*     function() { alert("You canceled the execution."); }
//*   );
//? Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous
//? Such functions are not accessible outside of ask (because they are not assigned to variables)
//? A function is a value representing an “action”
//? Regular values like strings or numbers represent the data
//? A function can be perceived as an action
//? We can pass it between variables and run when we want

//* Function Expression vs Function Declaration
//? Function Declaration: a function, declared as a separate statement, in the main code flow
//* Function Declaration
//* function sum(a, b) {
//*     return a + b;
//*   }
//? Function Expression: a function, created inside an expression or inside another syntax construct. 
//? Here, the function is created on the right side of the “assignment expression” =
//* Function Expression
//* let sum = function(a, b) {
//*     return a + b;
//*   };
//? A Function Expression is created when the execution reaches it and is usable only from that moment
//? Once the execution flow passes to the right side of the assignment let sum = function
//? the function is created and can be used (assigned, called, etc. ) from now on
//? A Function Declaration can be called earlier than it is defined
//? For example, a global Function Declaration is visible in the whole script, no matter where it is
//? That’s due to internal algorithms. When JavaScript prepares to run the script 
//? it first looks for global Function Declarations in it and creates the functions. 
//? We can think of it as an “initialization stage”
//? And after all Function Declarations are processed, the code is executed. So it has access to these functions
//* sayHi("John"); // Hello, John

//* function sayHi(name) {
//*   alert( `Hello, ${name}` );
//* }
//? The Function Declaration sayHi is created when JavaScript is preparing 
//? to start the script and is visible everywhere in it
//? If it were a Function Expression, then it wouldn’t work
//* sayHi("John"); // error!

//* let sayHi = function(name) {  // (*) no magic any more
//*   alert( `Hello, ${name}` );
//* };
//? Function Expressions are created when the execution reaches them
//? That would happen only in the line (*). Too late
//? Another special feature of Function Declarations is their block scope
//? In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block
//? But not outside of it
//? For instance, let’s imagine that we need to declare a function welcome() depending 
//? on the age variable that we get during runtime
//? And then we plan to use it some time later
//? If we use Function Declaration, it won’t work as intended
//* let age = prompt("What is your age?", 18);
//* // conditionally declare a function
//* if (age < 18) {

//*   function welcome() {
//*     alert("Hello!");
//*   }

//* } else {

//*   function welcome() {
//*     alert("Greetings!");
//*   }

//* }
//* // ...use it later
//* welcome(); // Error: welcome is not defined
//? That’s because a Function Declaration is only visible inside the code block in which it resides
//* let age = 16; // take 16 as an example

//* if (age < 18) {
//*   welcome();               // \   (runs)
//*                            //  |
//*   function welcome() {     //  |
//*     alert("Hello!");       //  |  Function Declaration is available
//*   }                        //  |  everywhere in the block where it's declared
//*                            //  |
//*   welcome();               // /   (runs)

//* } else {

//*   function welcome() {
//*     alert("Greetings!");
//*   }
//* }

//* // Here we're out of curly braces,
//* // so we can not see Function Declarations made inside of them.

//* welcome(); // Error: welcome is not defined
//? The correct approach would be to use a Function Expression and assign welcome
//? to the variable that is declared outside of if and has the proper visibility
//* let age = prompt("What is your age?", 18);

//* let welcome;

//* if (age < 18) {

//*   welcome = function() {
//*     alert("Hello!");
//*   };

//* } else {

//*   welcome = function() {
//*     alert("Greetings!");
//*   };

//* }

//* welcome(); // ok now
//? Or we could simplify it even further using a question mark operator ?
//* let age = prompt("What is your age?", 18);

//* let welcome = (age < 18) ?
//*   function() { alert("Hello!"); } :
//*   function() { alert("Greetings!"); };

//* welcome(); // ok now

//* When to choose Function Declaration versus Function Expression?
//? As a rule of thumb, when we need to declare a function 
//? the first thing to consider is Function Declaration syntax
//? It gives more freedom in how to organize our code, because we can call such functions before they are declared
//? That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than
//? let f = function(…) {…};. Function Declarations are more “eye-catching”
//? But if a Function Declaration does not suit us for some reason, or we need a conditional declaration
//? then Function Expression should be used
//? In most cases when we need to declare a function, a Function Declaration is preferable 
//? because it is visible prior to the declaration itself
//? That gives us more flexibility in code organization, and is usually more readable
//? So we should use a Function Expression only when a Function Declaration is not fit for the task

//TODO LINK: https://javascript.info/arrow-functions-basics
//* Arrow functions, the basics
//? There’s another very simple and concise syntax for creating functions 
//? that’s often better than Function Expressions
//? It’s called “arrow functions”, because it looks like this:
//* let func = (arg1, arg2, ..., argN) => expression;
//? This creates a function func that accepts arguments arg1..argN
//? then evaluates the expression on the right side with their use and returns its result
//? In other words, it’s the shorter version of
//* let func = function(arg1, arg2, ..., argN) {
//* return expression;
//* };
//? Let's see a concrete example
//* let sum = (a, b) => a + b;
//* /* This arrow function is a shorter form of:
//* let sum = function(a, b) {
//*   return a + b;
//* };
//* */
//* alert( sum(1, 2) ); // 3
//? As you can see, (a, b) => a + b means a function that accepts two arguments named a and b
//? Upon the execution, it evaluates the expression a + b and returns the result
//? If we have only one argument, then parentheses around parameters can be omitted, making that even shorter
//* let double = n => n * 2;
//* // roughly the same as: let double = function(n) { return n * 2 }
//* alert( double(3) ); // 6
//? If there are no arguments, parentheses are empty, but they must be present
//* let sayHi = () => alert("Hello!");
//* sayHi();
//? Arrow functions can be used in the same way as Function Expressions
//* let age = prompt("What is your age?", 18);
//* let welcome = (age < 18) ?
//*   () => alert('Hello!') :
//*   () => alert("Greetings!");
//* welcome();
//? Arrow functions may appear unfamiliar and not very readable at first 
//? but that quickly changes as the eyes get used to the structure
//? They are very convenient for simple one-line actions, when we’re just too lazy to write many words

//* Multiline arrow functions
//? Sometimes we need a more complex function, with multiple expressions and statements
//? In that case, we can enclose them in curly braces
//? The major difference is that curly braces require a return within them 
//? to return a value (just like a regular function does)
//* let sum = (a, b) => {  // the curly brace opens a multiline function
//*     let result = a + b;
//*     return result; // if we use curly braces, then we need an explicit "return"
//*   };
//*   alert( sum(1, 2) ); // 3

//TODO TASKS (Try on your own before looking at solution...)

//* Rewrite with arrow functions
//? Replace Function Expressions with arrow functions in the code below:
//* function ask(question, yes, no) {
//*     if (confirm(question)) yes();
//*     else no();
//*   }
  
//*   ask(
//*     "Do you agree?",
//*     function() { alert("You agreed."); },
//*     function() { alert("You canceled the execution."); }
//*   );
//TODO Answer
//* function ask(question, yes, no) {
//*     if (confirm(question)) yes();
//*     else no();
//*   }

//*   ask(
//*     "Do you agree?",
//*     () => { alert("You agreed."); },
//*     () => { alert("You canceled the execution."); }
//*   );

//TODO LINK https://www.javascripttutorial.net/javascript-call-stack/
//* JavaScript Call Stack
//? A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions
//? It has the information on what function is currently being run 
//? and what functions are invoked from within that function
//? Also, the JavaScript engine uses a call stack to manage execution contexts
//? Global execution context
//? function execution contexts
//? The call stack works based on the LIFO principle i.e., last-in-first-out
//? When you execute a script, the JavaScript engine creates a global execution context 
//? and pushes it on top of the call stack
//? Whenever a function is called, the JavaScript engine creates a function execution context for the function
//? pushes it on top of the call stack, and starts executing the function
//? If a function calls another function, the JavaScript engine creates a new function execution context
//? for the function being called and pushes it on top of the call stack
//? When the current function completes, the JavaScript engine pops it off the call stack
//? and resumes the execution where it left off
//? The script will stop when the call stack is empty

//* Asynchronous JavsScript
//? JavaScript is a single-threaded programming language
//? This means that the JavaScript engine has only one call stack. Therefore, it only can do one thing at a time
//? When executing a script, the JavaScript engine executes code from top to bottom, line by line
//? In other words, it is synchronous
//? Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to be completed
//* For example
//* Request for data from a remote server
//* Display a spinner
//* When the data is available, display it on the webpage
//? To do this, the JavaScript engine uses an event loop