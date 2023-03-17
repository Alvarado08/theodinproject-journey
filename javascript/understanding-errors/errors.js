//* LINK: https://www.theodinproject.com/lessons/foundations-understanding-errors
//* ERRORS

//* The Anatomy of an Error
//? An error is a type of object built into the JS language, consisting of a name/type and a message
//? Errors contain crucial information that can assist you in locating the code responsible for the error
//? determining why you have this error, and resolving the error
//* const a = "Hello"
//* const b = "World"
//* console.log(c)
//? This code will run, but it will generate an error. In technical terms, this is called “throwing” an error
//? The first part of an error displays the type of error. This provides the first clue as to what you’re dealing with
//! In this example, we have a ReferenceError
//? A ReferenceError is thrown when one refers to a variable that is not 
//? declared and/or initialized within the current scope
//? The error message explains that the error has occurred because c is not defined
//? Different errors of this type have different messages based on what is causing the ReferenceError
//? Another message you may run into is ReferenceError: can't access lexical declaration 'X' before initialization
//? The next part of an error gives us the name of the file in which you can find the error, and also the line number
//? This allows you to easily navigate to the problematic line in your code
//? Here, the error originates from the third line which is displayed as a link under the error message with the text
//? If you click this link, most browsers will navigate to the exact line of code and the rest of your script
//? in the Sources tab of the Developer Tools
//? Sometimes your browser’s console will also display the column (or character) in the line at which the error is occurring
//? Another important part of an error is the stack trace. This helps you understand when the error was thrown in your application
//? and what functions were called that led up to the error
//* For the following code:
//* const a = 5;
//* const b = 10;

//* function add() {
//*   return c;
//* }

//* function print() {
//*   add();
//* }

//* print();
//? Our function print() should call on add(), which returns a variable named c
//? which currently has not been declared
//! The corresponding error is as follows
//? The stack trace tells us that:
//? c is not defined in scope of add(), which is declared on line 5
//? add() was called by print(), which was declared on line 9
//? print() itself was called on line 12
//? Thus the stack trace lets you trace the evolution of an error back to its origin, which here is the declaration of add()

//* Common Types of Errors
//? These are some of the most common errors you will encounter, so it’s important to understand them