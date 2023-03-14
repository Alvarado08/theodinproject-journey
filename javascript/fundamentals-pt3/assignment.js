//* 1
//* Write a function called add7 that takes one number and returns that number + 7
function add7(number){
    return number + 7; //* 1 + 7
}

//* 2
//* Write a function called multiply that takes 2 numbers and returns their product
const multiply = (num1, num2) => num1 * num2; //* 2 * 2 = 4

//* 3
//* Write a function called capitalize that takes a string and returns that string 
//* with only the first letter capitalized
//* Make sure that it can take strings that are lowercase, UPPERCASE or BoTh
const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1); //* "hello World!" = "Hello World!"
};

//* 4
//* Write a function called lastLetter that takes a string and returns the very last letter of that string
const lastLetter = (word) => word.charAt(word.length - 1); //* "awesome" = "e"