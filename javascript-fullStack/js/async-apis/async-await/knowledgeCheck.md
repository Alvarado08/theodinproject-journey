# Knowledge Check

## How do you declare an async function?

**You declare an async function be adding it in front of the function declaration syntax you're using.**
**It is valid to use an async function anywhere you can use a normal function.**

```javascript
async function waitPlease() {
    console.log('Hi');
}
const yourAsyncFunction = async () => {
  // do something asynchronously and return a promise
  return result;
}
server.getPeople().then(async people => {
  people.forEach(person => {
    // do something asynchronously for each person
  });
});
```

## What does the async keyword do?

**Lets JavaScript know when to execute asynchronous code.**

## What does the await keyword do?

**await works as a "wait until finished" keyword. Used to get a value from a function where you would normally use .then().**
**Instead of chaining a .then(), await is assigned to a result variable within an async function.**

## What is returned from an async function?

**An async function returns a Promise.**

## What happens when an error is thrown inside an async function?

**It basically throws the error.**

## How can you handle errors inside an async function?

**The try/catch block.**
