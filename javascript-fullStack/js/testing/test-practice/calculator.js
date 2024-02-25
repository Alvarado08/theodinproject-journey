class Calculator {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    add(){
        return this.a + this.b;
    }
    subtract(){
        return this.a - this.b;
    }
    div(){
        return this.b == 0 ? false : this.a / this.b;
    }
    mul(){
        return this.a * this.b;
    }
}

module.exports = Calculator;