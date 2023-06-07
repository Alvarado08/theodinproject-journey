# Knowledge Check

## Write an object constructor and instantiate the object

```javascript
function User(name,age){
    this.name = name;
    this.age = age;
}
const user1 = new User("John",26);
```

## Describe what a prototype is and how it can be used

**A prototype is another object from where the original object inherits from. The original object has access to all of its prototype’s methods and properties. All objects have a prototype property. The syntax is:**

```javascript
User.prototype.greet = function(){
    return `${this.name} says Hi!`;
}
```

## Explain prototypal inheritance

**Prototypal inheritance in a nutshell is objects inheriting props or methods from their prototype object.**

## Understand the basic do’s and don’t’s of prototypical inheritance

**The prototype chain has to be set up using this function before creating any objects. Using setPrototypeOf() after objects have already been created can result in performance issues. Don't use: Player.prototype = Person.prototype because it will set Player.prototype to directly refer to Person.prototype (i.e. not a copy).**
