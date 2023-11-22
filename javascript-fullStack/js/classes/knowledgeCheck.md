# Knowledge Check

## Describe the pros and cons of using classes in JavaScript

Some pros include cleaner sintax and cons include brittleness and bad practices.

## How does JavaScript’s object creation differ from a language like Java or Ruby?

Classes in javscript actually don't exist. Rather, they depend on prototypes for their depending use cases.

## Explain the differences between object constructors and classes

Classes get labeled internally with [[IsClassConstructor]]: true. Unlike a regular function, it must be called with new.

## What are “getters” & “setters”?

They are a type of property called accessor. Essentially, functions that execute on getting and setting a value.

## Describe computed names and class fields

Essentialy computed names are made with notations. For exammple, bracket notation.

```javascript
['my'+'Method'](){
    console.log('Hi');
}
```

Class fields allows adding properties. The main difference is that they are set on individual objects and not the prototype.

```javascript
class User {
  name = "John";
}
alert(user.name); // John
alert(User.prototype.name); // undefined
```

## Describe function binding

When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: "losing this".
Functions provide a built-in method "bind" that allows to fix this.

```javascript
let boundFunc = func.bind(context);
```

## Describe static properties

Static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

## Describe private class features

Private properties are counterparts of the regular class properties which are public, including class fields, class methods, etc. They get created by using a hash # prefix and cannot be legally referenced outside of the class.

## How is inheritance used with classes?

The reserved "extends" keyword allows a class to inherit properties and methods from another class.

```javascript
class Animal {
}
class Bear extends Animal{
}
```

## Why is favoring Composition over Inheritance suggested?

The main reasons include: flexibility, loose coupling, avoid inheritence hierarchy and reusability.
