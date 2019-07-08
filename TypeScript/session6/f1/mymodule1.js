"use strict";
exports.__esModule = true;
var MyClass1 = /** @class */ (function () {
    function MyClass1() {
    }
    MyClass1.prototype.sayhi = function (x) {
        console.log('Hi ' + x + ' From MyClass1 class from F1 package');
    };
    return MyClass1;
}());
exports.MyClass1 = MyClass1;
function myfunction1(x) {
    console.log("Good morning Mr:" + x + " From myfunction1 function from F1 package");
}
exports.myfunction1 = myfunction1;
