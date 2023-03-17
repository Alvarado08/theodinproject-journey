//TODO PSEUDOCODE
//* USER INPUTS A NUMBER
//* LOOP FROM 1 TO NUMBER INPUTED
//* IF NUMBER IS DIVISIBLE BY 3, PRINT "FIZZ"
//* IF NUMBER IS DIVISIBLE BY 5, PRINT "BUZZ"
//* IF NUMBER IS DIVISIBLE BY 3 AND 5, PRINT "FIZZBUZZ"
//* OTHERWISE, PRINT NUMBER

let number = prompt("Please enter the number you would like to Fizzbuzz up to: ");

for(let i = 1; i <= number; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FIZZBUZZ");
    }else if(i % 3 === 0){
        console.log("FIZZ");
    }else if(i % 5 === 0){
        console.log("BUZZ");
    }else{
        console.log(i);
    }
}