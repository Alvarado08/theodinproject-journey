// TODO: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics

//* Test your skills: Object basics

//? Object basics 1
// In this task you are provided with an object literal, and your tasks are to:
// 1. Store the value of the name property inside the catName variable, using bracket notation
// 2. Run the greeting() method using dot notation (it will log the greeting to the browser's console)
// 3. Update the color property value to black
const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
}

// Add your code here
const catName = cat.name;
cat["greeting"];
cat.color = "black";

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${ catName }.`;
para2.textContent = `The cat's color is ${ cat.color }.`;

section.appendChild(para1);
section.appendChild(para2);

//? Object basics 2
/* We want you to have a go at creating your own object literal to represent one of your favorite bands
The required properties are:
name: A string representing the band name.
nationality: A string representing the country the band comes from.
genre: What type of music the band plays.
members: A number representing the number of members the band has.
formed: A number representing the year the band formed.
split: A number representing the year the band split up, or false if they are still together.
albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
 - name: A string representing the name of the album.
 - released: A number representing the year the album was released.
Include at least two albums in the albums array.
Then write a string to the variable bandInfo, which will contain a small biography detailing:
their name, nationality, years active, and style, and the title and release date of their first album
*/

let bandSection = document.querySelector(".band");
let bandInfo;

// Put your code here
const band = {
  name: "Behold The Beloved",
  nationality: "American",
  genre: "Rock",
  members: 5,
  formed: 2011,
  split: false,
  albums: [
    {
      name: "No Surrender",
      released: 2022,
    },
    {
      name: "Saints Wear White",
      released: 2019,
    }
  ],
}
bandInfo = `We are ${band.name}, an ${band.nationality} Christian ${band.genre} band made up of ${band.members} members
founded in ${band.formed}. Our latest album ${band["albums"][0].name} was released in ${band["albums"][0].released}`;
// Don't edit the code below here

let para3 = document.createElement('p');
para3.textContent = bandInfo;
bandSection.appendChild(para3);

//? Object basics 3
// return to the cat object literal from Task 1
// We want you to rewrite the greeting() method so that it logs "Hello, said Bertie the Cymric." to the browser's console
// but in a way that will work across any cat object of the same structure, regardless of its name or breed
// write your own object called cat2, which has the same structure, exactly the same greeting() method
// but a different name, breed, and color
// Call both greeting() methods to check that they log appropriate greetings to the console
const cat1 = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

const cat2 = {
  name : 'Cloud',
  breed : 'Seames',
  color : 'gray',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

cat1.greeting();
cat2.greeting();

//? Object basics 4
// In the code you wrote for Task 3, the greeting() method is defined twice, once for each cat
// This isn't ideal (specifically, it violates a principle in programming sometimes called DRY or "Don't Repeat Yourself")
// we want you to improve the code so greeting() is only defined once, and every cat instance gets its own greeting() method
// Hint: you should use a JavaScript constructor to create cat instances
let constructor = document.querySelector(".constructor");
function Cat(name,breed){
  this.name = name;
  this.breed = breed;
  this.greeting = function(){
    // console.log(`Hello, said ${this.name} the ${this.breed}.`);
    return `Hello, said ${this.name} the ${this.breed}.`;
  }
}
const sam = new Cat("Sam","Cymric");
sam.greeting();
const tom = new Cat("Tom","Seames");
tom.greeting();
let div1 = document.createElement("div");
let greeting = `${tom.greeting()}`;
div1.textContent = greeting;
constructor.appendChild(div1);