var Sum = /** @class */ (function () {
    function Sum() {
    }
    Sum.prototype.sum = function () {
        console.log(this.n1 + this.n2);
    };
    return Sum;
}());
//create an objcet1
var ob1 = new Sum();
//initializing values
ob1.n1 = 10;
ob1.n2 = 20;
//call function
ob1.sum();
//create an objcet2
var ob2 = new Sum();
//initializing values
ob2.n1 = 100;
ob2.n2 = 200;
//call function
ob2.sum();
