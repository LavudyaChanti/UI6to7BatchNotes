"use strict";
exports.__esModule = true;
var MyClass2 = /** @class */ (function () {
    function MyClass2() {
    }
    MyClass2.prototype.saybye = function (x) {
        console.log('Bye ' + x + ' From MyClass2 class from F1 package');
    };
    return MyClass2;
}());
exports.MyClass2 = MyClass2;
function myfunction2(x) {
    console.log("Good evening Mr:" + x + " From myfunction2 function from F1 package");
}
exports.myfunction2 = myfunction2;
