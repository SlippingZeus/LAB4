"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    plus(b) {
        let a = this;
        let real = a.real + b.real;
        let imaginary = a.imaginary + b.imaginary;
        return new Complex(real, imaginary);
    }
    minus(b) {
        let a = this;
        let real = a.real - b.real;
        let imaginary = a.imaginary - b.imaginary;
        return new Complex(real, imaginary);
    }
    modulus() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    show() {
        let symbol = "";
        let res = "";
        if (this.imaginary > 0) {
            res = this.real + "+" + this.imaginary + "i";
        }
        else if (this.imaginary < 0) {
            res = this.real + (this.imaginary + "i");
        }
        else {
            res = this.real + "";
        }
        return res;
    }
}
let x = new Complex(5, 8);
let y = new Complex(3, 7);
console.log("x: " + x.show());
console.log("y: " + y.show());
console.log("|x|: " + x.modulus());
console.log("|y|: " + y.modulus());
console.log("x+y: " + x.plus(y).show());
console.log("x-y: " + x.minus(y).show());
