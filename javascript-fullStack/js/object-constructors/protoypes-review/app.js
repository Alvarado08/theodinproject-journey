// Target all apple instance span tags
const appleEl = document.querySelectorAll(".apple");
// Target all apple prototype method span tags
const eatEl = document.querySelectorAll(".eat");

// Object Magic
function Apple(color){
    this.color = color;
}

// When an instance invokes the eat method, this will point to the instance
Apple.prototype = {
    eat: function(){
        return `I'm eating a ${this.color} apple!`;
    }
}

const redApple = new Apple("Red");
const greenApple = new Apple("Green");
const yellowApple = new Apple("Yellow");

// DOM Magic

// Instance Color Prop
appleEl.forEach(apple => {
    if(apple.id === "red"){
        apple.textContent = redApple.color;
    }else if(apple.id === "green"){
        apple.textContent = greenApple.color;
    }else{
        apple.textContent = yellowApple.color;
    }
})

// Instance Prototype Method
eatEl.forEach(eat => {
    if(eat.id === "red"){
        eat.textContent = redApple.eat();
    }else if(eat.id === "green"){
        eat.textContent = greenApple.eat();
    }else{
        eat.textContent = yellowApple.eat();
    }
})