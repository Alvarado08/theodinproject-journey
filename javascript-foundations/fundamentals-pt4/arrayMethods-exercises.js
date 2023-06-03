//* Q1. Define a function called cleanNames that accepts an array of strings containing 
//* additional space characters at the beginning and end. 
//* The cleanNames() function should use the array map method to return a new array full of trimmed names

function cleanNames(array){
    return array.map((item) => item.trim()); 
}

//console.log(cleanNames([" avengers", "   captain_america", "ironman   ", " black panther   "]));

//* Q2 Write a function that converts an array of values from miles to kilometres using the map method
//* In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable

function convertKm(array){
    return array.map((mile) => Math.round(mile * 1.609344));
}
function sumKm(km){
    let total = 0;
    for(let i = 0; i < km.length; i++){
        total += km[i];
    }
    return total;
}

const km = convertKm([23,50,2,3.2]);
const totalDistanceInKilometers = sumKm(km);
// console.log(km);
// console.log(totalDistanceInKilometers);

//* Q3 Square and sum the array elements using the arrow function and then find the average of the array

let nums = [25, 45, 55, 77, 88, 99];
const square = nums.map(num => num*num);
const average = square.reduce((acc, index) => acc + index, 0) / square.length;
console.log(Math.round(average));

//* My example: Using the filter method, return even numbers from an array of numbers
//* This method is more concise with arrow function
let numbers = [1,2,3,4,5,6,7,8,9,10];
const newArray = numbers.filter(number => number % 2 === 0);
//console.log(newArray);