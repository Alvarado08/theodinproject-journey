//* Writing Clean Code 
//? Consider the following two snippets of JavaScript:

//? This is ugly and hard to read code:
//* const x =
//* function(z) {
//* let w = 0;z.forEach(
//* function(q){
//*      w += q;
//* });return w;
//* };
//* x([2, 2, 2]);

//? Now, this is clean and easy to read code:
//* const sumArray = function(array) {
//*     let sum = 0;
//*     array.forEach(function(number) {
//*       sum += number;
//*     });
//*     return sum;
//*   };
//*   sumArray([2, 2, 2]);

//? Believe it or not, both of those functions do the exact same thing (in the exact same way!)
//? and both of them are perfectly valid code but obviously the second one is much easier to follow
//? Imagine you’re working on a project with someone else and they’ve written the first function
//? how long is it going to take you to figure out what’s going on there so you can do your work?
//? Imagine you’re working on a project all by yourself and YOU wrote the first function a week or two ago
//? chances are good that you aren’t going to remember exactly what you were up to there and 
//? it’s still going to take you a good while to figure it all out again
//? The second one, however, is much easier to follow. Even if you don’t know exactly 
//? what everything in the code is doing things are named clearly enough that you could guess
//? and the indentation is consistent enough that it’s easy to parse the different parts of the function
//? There are many different opinions on what constitutes great JavaScript code. 
//? The most important thing is just that you’re consistent
//? The war between coders that use tabs and coders that use spaces to indent their code is so engrained
//? that it’s essentially a joke by now, but it doesn’t really matter as long as you’re consistent

//* Rules of Thumb

//* Indention
//? It doesn’t really matter what style of indentation you use. Various JS style-guides recommend different options
//? and one is not really superior to the other. What is important, however, is consistency

//* Semicolons
//? Semicolons are mostly optional in JavaScript because the JS compiler will automatically insert them if they are omitted
//? This functionality CAN break in certain situations leading to bugs in your code 
//? so it is better to get used to adding semi-colons. Just do it!

//* Line Length
//? Again, different style guides will recommend different options for this one, but just about ALL of them
//? suggest limiting the length of each line of code
//? This rule is not quite as strict as some of the others, but as a general rule
//? your code will be easier to read if you manually break lines that are longer than about 80 characters
//? Many code editors have a line in the display to show when you have crossed this threshold
//? When manually breaking lines, you should try to break immediately after an operator or comma
//? Then, there are a few ways to format continuation lines. For example, you can:
//? - indent continuation lines by one level
//? - vertically align continuation lines with the first variable or some other format entirely
//* One possible format
//* let reallyReallyLongLine =
//*   something +
//*   somethingElse +
//*   anotherThing +
//*   howManyTacos +
//*   oneMoreReallyLongThing;

//* // Another possible format
//* let anotherReallyReallyLongLine = something + somethingElse + anotherThing +
//*                                   howManyTacos + oneMoreReallyLongThing;

//* Naming Things
//? Names for functions and variables should be descriptive. Always use camelCase
//? To keep things consistent and easy to read, variables should always begin with a noun or an adjective
//? (that is, a noun phrase) and functions with a verb
//? It is ok to use single characters as variable names in the context of a loop or a callback function
//? but not elsewhere
//* Good
//* const numberOfThings = 10;
//* const myName = "Thor";
//* const selected = true;
//! Bad (these start with verbs, could be confused for functions)
//* const getCount = 10;
//* const isSelected = true;
//* Good
//* function getCount() {
//*     return numberOfThings;
//*   }
//! Bad (it's a noun)
//* function myName() {
//*     return "Thor";
//*   }