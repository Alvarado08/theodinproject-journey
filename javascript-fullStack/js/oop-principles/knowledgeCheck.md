# Knowledge Check

## Explain the “Single Responsibility Principle”

**This principle focuses on managing components/modules for a single use or purpose.**

E.g. in a calorie tracker, import a Calorie Surplus module (checks if user surpassed his required calories) as a single piece of code within the CalorieTracker class.

## Briefly explain the additional SOLID principles

**Open/Closed Principle: This principle focuses on keeping components closed to changes but open for extensibility.**

E.g. in a quiz app, close the main printQuiz function to changes but open to accept more question types.

**Liskov Subsitution Principle: This principle focuses on writing cleaner object oriented code prioritizing on inheritence. A class should also be able to interact with all subclasses of that class without breaking. Essentially, a class is interchangeable with its subclasses.**

E.g. a Rectangle class has/extends a Square subclass. They are both a four sided object. Every square is a rectangle. But not all rectangles are a square.

```javascript
class Shape {
    area(){

    }
}
class Rectangle extends Shape {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    setWidth(width){
        this.width;
    }
    setHeight(height){
        this.height;
    }
    area(){
        return this.width * this.height;
    }
}
class Square extends Shape {
    setWidth(width){
        this.width = width;
        this.height = width;
    }
    setHeight(height){
        this.width = height;
        this.height = height;
    }
}
```

**Interface Segregation Principle: This principle focuses on any class that inherits from another class needs to use all of the methods/properties from the base class. This encourages writing small classes instead of large classes.**

E.g. a video game has a parent class of Entity. Each method (action) is created separately & assigned only to a subclass that needs it. move() for a Character subclass, attack() to Turret subclass.

**Dependency Inversion Principle: This principle focuses on any class that uses a dependency should only ever use the dependency through a predefined interface/wrapper. This makes it so that your code will never directly depend on a low level API for its operations, for example.**

E.g. an online store that accepts payment gateways such as Stripe and Paypal. The main parent class/interface is  Store and the PaymentProcess subclass will depend on their PaymentGateway parents in order to avoid modifying the main Store class/interface.

```javascript
class Store {
    constructor(paymentProcessor){
        this.paymentProcessor = paymentProcessor;
    }
    purchaseBike(qty){
        this.paymentProcessor.pay(100*qty);
    }
}
class StripePaymentProcessor {
    constructor(user){
        this.stripe = new Stripe(user);
    }
    pay(dollars){
        this.stripe.makePayment(dollars*100);
    }
}
class Stripe {
    constructor(user){
        this.user = user;
    }
    makePayment(cents){
        console.log(`${this.user} made a payment of ${cents / 100} with Stripe`);
    }
}
const store = new Store(new StripePaymentProcessor('John'));
store.purchaseBike(2);
// "John made a payment of $200 with Stripe
```

## Explain what “tightly coupled” objects are and why we want to avoid them

**Tightly coupled objects are modules/components that "know" about each other's existence and are in a way dependant of each other, thus exposing the application to many kinds of problems. We should avoid this in order to depend and implement independent testibility, interchangeablity, code reuseability and protection against a single point of failure.**
