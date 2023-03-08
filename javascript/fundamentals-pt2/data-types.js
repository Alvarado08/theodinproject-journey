//* LINK: https://javascript.info/types

//* DATA TYPES
//? A value in JavaScript is always of a certain type
//? There are eight basic data types in JavaScript
//? When a variable can dynamically change data types it stores,
//? Programming languages that allow such things, such as JavaScript, are called “dynamically typed” 
//? meaning that there exist data types, but variables are not bound to any of them
//* PRIMITIVES
//* Number
//? The number type represents both integer and floating point numbers
//? Besides regular numbers, there are so-called “special numeric values” 
//? which also belong to this data type: Infinity, -Infinity and NaN
//* - Infinity
//? Infinity represents the mathematical Infinity 
//? It is a special value that’s greater than any number
//? We can get it as a result of division of zero
//* ex. 1 / 0 = Infinity
//? Or just reference it directly
//* ex. alert(Infinity)
//* - NaN
//? NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation
//* ex. not a number / 2 = NaN
//? NaN is sticky. Any further mathematical operation on NaN returns NaN
//? if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result 
//? (there’s only one exception to that: NaN ** 0 is 1)
//? Special numeric values formally belong to the “number” type 
//? Of course they are not numbers in the common sense of this word
//* - BigInt
//? In JavaScript, the “number” type cannot safely represent integer values larger than (253-1)
//? (that’s 9007199254740991), or less than -(253-1) for negatives
//? To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308)
//? but outside of the safe integer range ±(253-1) there’ll be a precision error
//? because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored
//* ex. 9007199254740991 + 1 = 9007199254740992
//? All odd integers greater than (2^53-1) can’t be stored at all in the “number” type
//? Sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps
//? A BigInt value is created by appending n to the end of an integer
//* ex. bigInt = 1234567890123456789012345678901234567890n
//* String
//? A string in JavaScript must be surrounded by quotes
//? In JavaScript, there are 3 types of quotes
//? Double quotes: "Hello"
//? Single quotes: 'Hello'
//? Backticks: `Hello`
//? Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript
//? Backticks are “extended functionality” quotes
//? They allow us to embed variables and expressions into a string by wrapping them in ${…}
//* ex. let name = "Jane"
//* ex. alert(`Hello, ${name}!`) = Hello, Jane
//? Embed an expression 
//* ex. alert(`the result is ${1 + 2}`);
//? The expression inside ${…} is evaluated and the result becomes a part of the string
//? We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex
//* Boolean(logical type)
//? The boolean type has only two values: true and false
//? This type is commonly used to store yes/no values: true means “yes, correct”
//? false means “no, incorrect”
//* ex. let nameFieldChecked = true(yes)
//* ex. let ageFieldChecked = false(no)
//? Boolean values also come as a result of comparisons
//* ex. let isGreater = 4 > 1;
//* alert(isGreater) = true
//* Null
//? The special null value does not belong to any of the types described above
//? It forms a separate type of its own which contains only the null value
//* ex. let age = null
//? In JavaScript, null is not a “reference to a non-existing object” 
//? Or a “null pointer” like in some other languages
//? It’s just a special value which represents “nothing”, “empty” or “value unknown”.
//* Undefined
//? The special value undefined also stands apart. It makes a type of its own, just like null
//? The meaning of undefined is “value is not assigned”
//? If a variable is declared, but not assigned, then its value is undefined
//* ex. let age;
//* alert(age) = undefined
//? Technically, it is possible to explicitly assign undefined to a variable
//* ex. age = undefined
//? Normally, one uses null to assign an “empty” or “unknown” value to a variable
//? While undefined is reserved as a default initial value for unassigned things
//* NON-PRIMITIVES
//* Objects and Symbols
//? All other types are called “primitive” because their values can contain only a single thing 
//? (be it a string or a number or whatever)
//? In contrast, objects are used to store collections of data and more complex entities
//? The symbol type is used to create unique identifiers for objects. 
//* typeof operator
//? The typeof operator returns the type of the operand
//? It’s useful when we want to process values of different types differently or just want to do a quick check
//? A call to typeof x returns a string with the type name
//* ex. typeof 0 = number 
//* ex. typeof "hello" = string
//? You may also come across another syntax: typeof(x)
//? It’s the same as typeof x

//* TASK (Try on your own before looking at solution...)

//* String quote
//? What is the output of the script?
let name = "Max";
alert( `hello ${1}` ); //* hello 1
alert( `hello ${"name"}` ); //* hello name
alert( `hello ${name}` ); //* "hello Max"