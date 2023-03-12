//* CONDITIONALS
//* Notes will be added another day due to last minute situations

//* Switch Statement
//? switch is a type of conditional statement that will evaluate an expression against multiple possible cases
//? and execute one or more blocks of code based on matching cases
//? The switch statement is closely related to a conditional statement containing many else if blocks
//? and they can often be used interchangeably
//? The switch statement evaluates an expression and executes code as a result of a matching case
//? It will always be written with switch () {}
//? with parentheses containing the expression to test
//? and curly brackets containing the potential code to execute
//? The switch statement consists of case statements and a fallback known as default
//* switch (expression) {
//* 	case x:
//* 		// execute case x code block
//* 		break;
//* 	case y:
//* 		// execute case y code block
//* 		break;
//* 	default:
//* 		// execute default code block
//* }
//? In this code block, we will find the current day of the week with the new Date() method
//? and getDay() to print a number corresponding to the current day
//? 0 stands for Sunday, all the way through 6 which stands for Saturday
//? Using switch, we will send a message to the console each day of the week
//? The program will run in order from top to bottom looking for a match, and once one is found
//? the break command will halt the switch block from continuing to evaluate statements
// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
//* const day = new Date().getDay();

//* switch (day) {
//* 	case 0:
//* 		console.log("It's Sunday, time to relax!");
//* 		break;
//* 	case 1:
//* 		console.log("Happy Monday!");
//* 		break;
//* 	case 2:
//* 		console.log("It's Tuesday. You got this!");
//* 		break;
//* 	case 3:
//* 		console.log("Hump day already!");
//* 		break;
//* 	case 4:
//* 		console.log("Just one more day 'til the weekend!");
//* 		break;
//* 	case 5:
//*		console.log("Happy Friday!");
//* 		break;
//* 	case 6:
//* 		console.log("Have a wonderful Saturday!");
//* 		break;
//* 	default:
//* 		console.log("Something went horribly wrong...");
//* }
//? We have included a default block at the end to run in case of an error
//? We also could have, for example, only printed results for Monday to Friday
//? and the default block could have had the same message for the weekend
//? If we had omitted the break keyword in each statement
//? none of the other case statements would have evaluated to true
//? but the program would have continued to check until it reached the end
//? In order to make our programs faster and more efficient, we include the break
//* Switch Ranges
//? There might be an occasion in which you will need to evaluate a range of values in a switch block
//? as opposed to a single value as in our example above
//? We can do this by setting our expression to true and doing an operation within each case statement
//? For the folowwing example, since we’re checking a range, we will perform the operation in each case 
//? to check if each expression is evaluating to true
//? then break out of the statement once the requirements for true have been satisfied
//* ex. Set the student's grade
//* const grade = 87;

//* switch (true) {
//* 	// If score is 90 or greater
//* 	case grade >= 90:
//* 		console.log("A");
//* 		break;
//* 	// If score is 80 or greater
//* 	case grade >= 80:
//* 		console.log("B");
//* 		break;
//* 	// If score is 70 or greater
//* 	case grade >= 70:
//* 		console.log("C");
//* 		break;
//* 	// If score is 60 or greater
//* 	case grade >= 60:
//* 		console.log("D");
//* 		break;
//* 	// Anything 59 or below is failing
//* 	default:
//* 		console.log("F");
//* }
//* Output: "B"
//? Just like with else if, switch is evaluated from top to bottom
//? and the first true match will be accepted
//? Therefore, even though our grade variable is 87
//? and therefore evaluates to true for C and D as well, the first match is B, which will be the output
//* Multiple Cases
//? You may encounter code in which multiple cases should have the same output
//? In order to accomplish this, you can use more than one case for each block of code
//? The new Date().getMonth() method will output a number from 0 to 11, with 0 being January and 11 being December
//? Our application will output the four seasons with the following specifications for simplicity
//? Winter: January, February, and March
//? Spring: April, May, and June
//? Summer: July, August, and September
//? Autumn: October, November, and December
//* ex. const month = new Date().getMonth();
//* switch (month) {
//* 	// January, February, March
//* 	case 0:
//* 	case 1:
//* 	case 2:
//* 		console.log("Winter");
//* 		break;
//* 	// April, May, June
//* 	case 3:
//* 	case 4:
//* 	case 5:
//* 		console.log("Spring");
//* 		break;
//* 	// July, August, September
//* 	case 6:
//* 	case 7:
//* 	case 8:
//* 		console.log("Summer");
//* 		break;
//* 	// October, November, December
//* 	case 9:
//* 	case 10:
//* 	case 11:
//* 		console.log("Autumn");
//* 		break;
//* 	default:
//* 		console.log("Something went wrong.");
//* }
//? The current month at the time of publication was 8
//? which corresponded to one of the case statements with the "Summer" season output