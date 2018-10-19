var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.plus = function (b) {
        var a = this;
        var real = a.real + b.real;
        var imaginary = a.imaginary + b.imaginary;
        return new Complex(real, imaginary);
    };
    Complex.prototype.minus = function (b) {
        var a = this;
        var real = a.real - b.real;
        var imaginary = a.imaginary - b.imaginary;
        return new Complex(real, imaginary);
    };
    Complex.prototype.modulus = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.show = function () {
        var symbol = "";
        var res = "";
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
    };
    return Complex;
}());
var x = new Complex(5, 8);
var y = new Complex(3, 7);
console.log("x: " + x.show());
console.log("y: " + y.show());
console.log("|x|: " + x.modulus());
console.log("|y|: " + y.modulus());
console.log("x+y: " + x.plus(y).show());
console.log("x-y: " + x.minus(y).show());
