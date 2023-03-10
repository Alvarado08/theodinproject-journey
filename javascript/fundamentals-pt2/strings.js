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
//* All string methods return a new string
//* They don't modify the original string
//* Strings are immutable: Strings cannot be changed, only replaced

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
//* Replace
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
//* ReplaceAll
//? In 2021, JavaScript introduced the string method replaceAll()
//* ex. text = text.replaceAll("Cats","Dogs");
//* text = text.replaceAll("cats","dogs");
//? The replaceAll() method allows you to specify a regular expression instead of a string to be replaced
//? If the parameter is a regular expression, the global flag (g) must be set set
//! Otherwise a TypeError is thrown
//* ex. text = text.replaceAll(/Cats/g,"Dogs");
//* text = text.replaceAll(/cats/g,"dogs");

//* Converting to Upper and Lower Case
//? A string is converted to upper case with toUpperCase()
//* ex. let text1 = "Hello World!";
//* let text2 = text1.toUpperCase() = "HELLO WORLD"
//? A string is converted to lower case with toLowerCase()
//* ex. let text1 = "Hello World!";      
//* let text2 = text1.toLowerCase() = "hello world"

//* JavaScript String concat()
//? concat() joins two or more strings
//* ex. let text1 = "Hello";
//* let text2 = "World";
//* let text3 = text1.concat(" ", text2);
//? The first parameter is what the string is going to be joined with
//? The concat() method can be used instead of the plus operator

//* JavaScript String trims
//* trim()
//? The trim() method removes whitespace from both sides of a string
//* ex. let text1 = "      Hello World!      ";
//* let text2 = text1.trim() = "Hello World!"
//* trimStart()
//? ECMAScript 2019 added the String method trimStart() to JavaScript
//? The trimStart() method works like trim()
//? but removes whitespace only from the start of a string
//* ex. let text1 = "     Hello World!     ";
//* let text2 = text1.trimStart() = "Hello World!     "
//* trimEnd()
//? ECMAScript 2019 added the String method trimEnd() to JavaScript
//? The trimEnd() method works like trim()
//? but removes whitespace only from the end of a string
//* ex. let text1 = "     Hello World!     ";
//* let text2 = text1.trimEnd() = "     Hello World!"

//* JavaScript String Padding
//? ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding
//? at the beginning and at the end of a string
//* padStart()
//? The padStart() method pads a string with another string
//* ex. let text = "5";
//* let padded = text.padStart(4,"x") = "xxx5"
//? To pad a number, convert the number to a string first
//* ex. let numb = 5;
//* let text = numb.toString();
//* let padded = text.padStart(4,"0") = "0005"

//* Extracting String Characters
//? There are 3 methods for extracting string characters
//* charAt(position)
//* charCodeAt(position)
//* Property access [ ]
//* charAt()
//? The charAt() method returns the character at a specified index (position) in a string
//* let text = "HELLO WORLD";
//* let char = text.charAt(0) = "H"
//* charCodeAT()
//? The charCodeAt() method returns the unicode of the character at a specified index in a string
//? The method returns a UTF-16 code (an integer between 0 and 65535)
//* let text = "HELLO WORLD";
//* let char = text.charCodeAt(0) = 72
//* Property Access
//? ECMAScript 5 (2009) allows property access [ ] on strings
//? It makes strings look like arrays (but they are not)
//? If no character is found, [ ] returns undefined, while charAt() returns an empty string
//? It is read only. str[0] = "A" gives no error (but does not work!)
//* ex. let text = "HELLO WORLD";
//* let char = text[0];

//* Converting a String to an Array
//? If you want to work with a string as an array, you can convert it to an array
//? A string can be converted to an array with the split() method
//* text.split(",") // Split on commas
//* text.split(" ") // Split on spaces
//* text.split("|") // Split on pipe
//? If the separator is omitted, the returned array will contain the whole string in index [0]
//? If the separator is "", the returned array will be an array of single characters
//* text.split("")