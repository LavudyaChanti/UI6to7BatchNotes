"use strict";
exports.__esModule = true;
var C1 = /** @class */ (function () {
    function C1() {
    }
    C1.prototype.sayhi = function (x) {
        console.log('Hi ' + x + ' From C1 class');
    };
    return C1;
}());
exports.C1 = C1;
var C2 = /** @class */ (function () {
    function C2() {
    }
    C2.prototype.sayhello = function (x) {
        console.log('Hello ' + x + ' From C2 class');
    };
    return C2;
}());
exports.C2 = C2;
var C3 = /** @class */ (function () {
    function C3() {
    }
    C3.prototype.saybye = function (x) {
        console.log('Bye' + x + ' From C3 class');
    };
    return C3;
}());
exports.C3 = C3;
function wish1(x) {
    console.log("Good morning Mr:" + x);
}
exports.wish1 = wish1;
function wish2(x) {
    console.log("Good afternoon Mr:" + x);
}
exports.wish2 = wish2;
function wish3(x) {
    console.log("Good evening Mr:" + x);
}
exports.wish3 = wish3;
