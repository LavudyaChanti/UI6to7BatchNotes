var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Inheritance with Functions
var UrFather2 = /** @class */ (function () {
    function UrFather2() {
    }
    UrFather2.prototype.eating = function () {
        console.log('Parent eating chicken biryani');
    };
    return UrFather2;
}());
var U2 = /** @class */ (function (_super) {
    __extends(U2, _super);
    function U2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    U2.prototype.eating = function () {
        console.log('Child eating mutton biryani');
    };
    return U2;
}(UrFather2));
console.log('--Accessing Child Members--');
var childob = new U2();
childob.eating();
