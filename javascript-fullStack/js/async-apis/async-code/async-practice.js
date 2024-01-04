//TODO: Scrimba lesson

//* Promises
//? Resolving
new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 2000);
})
.then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('last then: ', num);});

//? Rejecting
new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { reject("Error: This is a test"); }, 2000);
})
.then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('last then: ', num);})
.catch(handleError)

function handleError(error){
  console.log(error)
}

//* Promise through a fetch request
// Fetch cats data
// Make sure to convert that data to json
// Build a callback function to accpet the json data
// Iterate through the json data and console.log each cat name
// try building your callback function in the general program and pass it in to .then

const promiseCats = fetch("data/cats.json")
.then(toJson)
.then(catNames)

function toJson(data){
  return data.json();
}

function catNames(data){
  return data.cats.map(cat => console.log(cat.name));
}

console.log("Promise" + promiseCats);