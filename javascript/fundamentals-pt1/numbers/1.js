//* LINK: https://javascript.info/operators

//* BASIC OPERATORS, MATHS
//* OPERAND - is what operators are applied to
//? (5) + (5)
//* OPERATOR - is unary if it has a single operand. An operator is binary if it has two operands
//? The unary negation - reverses the sign of a number
//? Binary - 5 (+) 5
// * OPERATIONS SUPPORTED: Addition (+), Subtraction (-), Multiplication (*), Division (/), Remainder (%), Exponentiation (**)
//? % - remainder of integer division 
// * ex. 5 % 2 = 1
//? ** - exponentiation operator a ** b raises a to the power of b
//* ex. 2 ** 3 = 8 (2*2*2)
//? Also, ** can be a square root is an exponentiation by 1/2
// * ex. 8 ** (1/3) = 2 (cubic root of 8)

//* STRING CONCATENATION WITH BINARY +
//? If the binary + is applied to strings, it merges (concatenates) them
//* ex. "my" + "string" = mystring
//? If any of the operands is a string, then the other one is converted to a string too
//? It doesn’t matter whether the first operand is a string or the second one
//* ex. "1" + 2 = 12
//? Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it
//* Complex ex. 2 + 2 + "1" = 41
//? The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers
// * subtraction ex. 6 - "2" = 4
// * division ex. "6" - "2" = 3

//* NUMERIC CONVERSION, UNARY +
//? The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers
//? If the operand is not a number, the unary plus converts it into a number
//* ex. +true = 1 AND +"" = 0
//? Does the same thing as Number(...), but is shorter
//? If we want to treat values as numbers, we need to convert and then sum them
//* ex. let apples = "2", bananas = "3"
//* +apples + +bananas = 5

//* ASSIGNMENT 
//? An assignment = is also an operator
//? That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first
//? then the = is evaluated, storing the result in x
//* Assignment = returns a value 
//? All operators in JavaScript return a value
//? The call x = value writes the value into x and then returns it
//* ex. let a = 1, b = 2
//* let c = 3 - (a = b + 1) = a(3), c(0)
//? The result of expression (a = b + 1) is the value which was assigned to a (that is 3). 
//? It is then used for further evaluations.
//! Don’t write the code like that. Such tricks definitely don’t make code clearer or readable.
//* Chaining assignments
//* ex. a = b = c = 2 + 2;
//? Chained assignments evaluate from right to left.
//? First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a
//? At the end, all the variables share a single value.
//! It’s better to split such code into few lines

//* MODIFY-IN-PLACE
//* ex. let n = 2
//* n = n + 5
//* n = n * 5
//? This notation can be shortened using the operators += and *=
//* ex. let n = 2
//* n += 5
//* n *= 5
//? Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.
//* ex. let n = 2
//* n *= 3 + 5 (right part evaluated first, same as n *= 8)
//* n = 16

//* INCREMENT/DECREMENT
//? Increasing or decreasing a number by one is among the most common numerical operations
//? Increment ++ increases a variable by 1
//* ex. let counter = 2
//* counter++ = 3
//? Decrement -- decreases a variable by 1
//* ex. let counter = 2
//* counter-- = 1
//! Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error
//? The operators ++ and -- can be placed either before or after a variable
//* Postfix and Prefix
//? When the operator goes after the variable, it is in “postfix form”: counter++
//? The “prefix form” is when the operator goes before the variable: ++counter
//? Is there any difference? Yes, but we can only see it if we use the returned value of ++/--
//? The prefix form returns the new value 
//? Postfix form returns the old value (prior to increment/decrement)
//? The prefix form ++counter increments counter and returns the new value, 2. So, the result shows 2
//* ex. let counter = 1, a = ++counter
//* a = 2
//? The postfix form counter++ also increments counter but returns the old value (prior to increment). 
//? So, the alert shows 1
//* ex. let counter = 1, a = counter++
//* a = 1
//? If the result of increment/decrement is not used, there is no difference in which form to use
//* ex. let counter = 0
//* counter++
//* ++counter
//* counter = 2
//? If we’d like to increase a value and immediately use the result of the operator, we need the prefix form
//* ex. let counter = 0
//* ++counter = 1
//? If we’d like to increment a value but use its previous value, we need the postfix form
//* ex. let counter = 0
//* counter++ = 0
//? The operators ++/-- can be used inside expressions as well 
//? Their precedence is higher than most other arithmetical operations
//* ex. let counter = 1
//* 2 * ++counter = 4
//? Compare with:
//* let counter = 1
//* 2 * counter++ = 2 (counter++ returns the "old" value)

//* COMMA
//? The comma operator , is one of the rarest and most unusual operators
//? Sometimes, it’s used to write shorter code
//? The comma operator allows us to evaluate several expressions, dividing them with a comma
//? Each of them is evaluated but only the result of the last one is returned
//? Here, the first expression 1 + 2 is evaluated and its result is thrown away 
//? Then, 3 + 4 is evaluated and returned as the result
//? Parentheses are important in this example
//* let a = (1 + 2, 3 + 4)
//* a = 7
//? Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7
//? Then the assignment operator = assigns a = 3
//? And the rest is ignored. It’s like (a = 1 + 2), 3 + 4
//? Such tricks are used in many JavaScript frameworks
//! Usually they don’t improve code readability so we should think well before using them

//* TASKS (Try on your own before looking at solution...)

//* Postfix and Prefix forms
//? What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a; //* 2
let d = b++; //* 1

//* Assignment result
//? What are the values of a2 and x after the code below?
let a2 = 2;
let x = 1 + (a2 *= 2); //* a2(4), x(5)

//* Type conversions
//? What are the results of these expressions?
//* 1. "" + 1 + 0 = "10" 
//* 2. "" - 1 + 0 = 1 (correct answer = -1) (empty string = 0)
//* 3. true + false = false (correct answer = 1)
//* 4. 6 / "3" = 2
//* 5. "2" * "3" = 6
//* 6. 4 + 5 + "px" = 9px
//* 7. "$" + 4 + 5 = $9 (correct answer = $45)
//* 8. "4" - 2 = 2
//* 9. "4px" - 2 = NaN
//* 10. "  -9  " + 5 = -95 (correct answer = " -9 5" )
//* 11. "  -9  " - 5 = -14
//* 12. null + 1 = undefined (correct answer = 1) (null becomes 0 after the numeric conversion)
//* 13. undefined + 1 = NaN
//* 14. " \t \n" - 2 = NaN (correct answer = -2) (Here the whole string consists of space characters, such as \t, \n and a “regular” space between them)
//* (So, similarly to an empty string, it becomes 0)

//* Fix the addition
//? Here’s a code that asks the user for two numbers and shows their sum
//? It works incorrectly. The output in the example below is 12 (for default prompt values)
//? Why? Fix it. The result should be 3
let a3 = prompt("First number?", 1); 
let b2 = prompt("Second number?", 2); 
alert(a + b); //* alert(+a + +b); or + before prompt