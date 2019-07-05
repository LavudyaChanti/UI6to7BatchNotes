var Sum1 = /** @class */ (function () {
    function Sum1(t1, t2) {
        this.n1 = t1;
        this.n2 = t2;
    }
    Sum1.prototype.sum = function () {
        console.log(this.n1 + this.n2);
    };
    return Sum1;
}());
//create an objcet1
var s1 = new Sum1(10, 20);
//calling function
s1.sum();
//create an objcet2
var s2 = new Sum1(100, 2000);
//calling function
s2.sum();
