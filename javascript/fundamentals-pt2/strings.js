//* LINK: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings 

//* STRINGS 
//? A string is simply a piece of text
//? In JavaScript, you can choose single quotes or double quotes to wrap your strings in. Both will work okay
//! However; differently quoted code can be confusing
//! especially if you use two different quotes on the same string!
//* ex. const badQuotes = 'What on earth?";
//? The browser will think the string has not been closed 
//? because the other type of quote you are not using to contain your strings can appear in the string
//! However, you can't include the same quote mark inside the string if it's being used to contain them
//* ex. const bigmouth = 'I've got no right to take my place…';
//* Escaping characters in a string 
//? To fix our previous problem code line, we need to escape the problem quote mark
//? Escaping characters means that we do something to them to make sure they are recognized as text
//? not part of the code. In JavaScript, we do this by putting a backslash just before the character
//* ex. const bigmouth = 'I\'ve got no right to take my place…';
//* Multiline strings 
//? Template literals(backtick quotes)respect the line breaks in the source code
//? so you can write strings that span multiple lines
//* ex. const output = `I like the song.
//* I gave it a score of 90%.`;
//? To have the equivalent output using a normal string 
//? you'd have to include line break characters (\n) in the string
//* ex. const output = "I like the song.\nI gave it a score of 90%.";

//* LINK: https://www.w3schools.com/js/js_string_methods.asp 
//* String Methods Reference: https://www.w3schools.com/jsref/jsref_obj_string.asp 

//* STRING METHODS
//? A method, like a function, is a set of instructions that perform a task
//? The difference is that a method is associated with an object, while a function is not
//* NOTES
//* Using methods
//* ex. variable.method()
//* i.e the "length" doesn't use parenthesis because it is a property
//* JavaScript counts positions from zero
//* First position is 0
//* Second position is 1 

//* Length
//? The length property returns the length of a string
//* ex. let text = "Hi";
//* let length = text.length = 2

//* Extracting String Parts
//? There are 3 methods for extracting a part of a string
//* slice(start, end)
//* substring(start, end)
//* substr(start, length)
//* Slice
//? slice() extracts a part of a string and returns the extracted part in a new string
//? The method takes 2 parameters: start position, and end position slice(start, end) (end is not included)
//* ex. let text = "Hello";
//* let part = text.slice(2,5) = "llo"
//? If you omit the second parameter, the method will slice out the rest of the string
//* ex. let text = "Hello";
//* let part = text.slice(1) = "ello" 
//? If a parameter is negative, the position is counted from the end of the string
//* ex. let text = "Hello";
//* let part = text.slice(-2) = "lo" 
//? Using both parameters with negative positions(essentially backwards)
//* ex. let text = "Hello";
//* let part = text.slice(-4,-2) = "el" 
//* Substring
//? substring() is similar to slice()
//? The difference is that start and end values less than 0 are treated as 0 in substring()
//? If you omit the second parameter, substring() will slice out the rest of the string
//* Substr
//? substr() is similar to slice()
//? The difference is that the second parameter specifies the length of the extracted part
//* ex. let text = "Banana and Apple";
//* let part = text.substr(11,3) = "App"
//? If you omit the second parameter, substr() will slice out the rest of the string
//* ex. let text = "Banana and Apple";
//* let part = text.substr(11) = "Apple"
//? If the first parameter is negative, the position counts from the end of the string
//* ex. let text = "Banana and Apple";
//* let part = text.substr(-11) = "a and Apple"

//* Replacing String Content
//? The replace() method replaces a specified value with another value in a string
//* ex. let text = "Please visit Microsoft!";
//* let newText = text.replace("Microsoft", "W3Schools") = "Please visit W3Schools"
//? The replace() method does not change the string it is called on
//? The replace() method returns a new string
//? The replace() method replaces only the first match
//? If you want to replace all matches, use a regular expression with the /g flag set
//? By default, the replace() method replaces only the first match
//? By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work
//? To replace case insensitive, use a regular expression with an /i flag (insensitive)
//* ex. let text = "Please visit Microsoft!";
//* let newText = text.replace(/MICROSOFT/i, "W3Schools") = "Please visit W3Schools"
//? To replace all matches, use a regular expression with a /g flag (global match)
//* ex. let text = "Please visit Microsoft and Microsoft!";
//* let newText = text.replace(/Microsoft/g, "W3Schools") = "Please visit W3Schools and W3Schools!"
//? You can even combine these 2 regular expression flags
//* ex. let text = "Please visit MicRosoft and MicrosOft!";
//* let newText = text.replace(/MICROSOFT/ig, "W3Schools") = "Please visit W3Schools and W3Schools!"