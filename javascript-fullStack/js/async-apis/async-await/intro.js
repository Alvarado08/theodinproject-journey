/*
const server = {
    people: [
      {
        name: "Odin",
        age: 20,
      },
      {
        name: "Thor",
        age: 35,
      },
      {
        name: "Freyja",
        age: 29,
      },
    ],
  
    getPeople() {
      return new Promise((resolve, reject) => {
        / Simulating a delayed network call to the server
        setTimeout(() => {
          resolve(this.people);
        }, 2000);
      });
    },
};
*/

//TODO async keyword

//? The async keyword is what lets the JavaScript engine know that you are declaring an asynchronous function
//* This is required to use await inside any function
//* When a function is declared with async, it automatically returns a promise
//* returning in an async function is the same as resolving a promise

//? An important thing to understand is async functions are just syntactical sugar for promises
//* it is valid to use an async function anywhere you can use a normal function

async function waitPlease() {
    console.log('Hi');
}
waitPlease();

//TODO await keyword

//? Tells JavaScript to wait for an asynchronous action to finish before continuing the function
//* It’s like a ‘pause until done’ keyword

//? The await keyword is used to get a value from a function where you would normally use .then(). Instead of calling .then()
//* After the asynchronous function, you would assign a variable to the result using await
//? Then you can use the result in your code as you would in your synchronous code.

//TODO Error handling

//? Promises have the .catch() method for handling rejected promises
//* Since async functions just return a promise, you can call the function, and append a .catch() method to the end

/* 
asyncFunctionCall().catch(err => {
  console.error(err)
});
*/

//? But there is another way: the mighty try/catch block!
//* If you want to handle the error directly inside the async function, you can use try/catch

function getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve("Success: Here's all the people!");
      }, 2000);
    })
}

async function getPersonsInfo(name){
    try {
        const people = await server.getPeople();
        const person = people.find(person => {return person.name === name});
        return person;
    } catch (error) {
        console.log("Oops. This person doesn't exist!");
    }
}

//* Doing this can look messy, but it is a very easy way to handle errors without appending .catch() after your function calls