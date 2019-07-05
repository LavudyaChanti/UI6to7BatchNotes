var P1 = /** @class */ (function () {
    function P1() {
    }
    P1.prototype.getsub = function (a, b) {
        console.log(a - b);
    };
    return P1;
}());
var P2 = /** @class */ (function () {
    function P2() {
    }
    P2.prototype.getsub = function (a, b) {
        if (a > b)
            console.log(a - b);
        else
            console.log(b - a);
    };
    return P2;
}());
var tlob1 = new P1();
tlob1.getsub(100, 800);
var tlob2 = new P2();
tlob2.getsub(100, 700);
