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
var UrFather3 = /** @class */ (function () {
    function UrFather3() {
    }
    UrFather3.prototype.eating = function () {
        console.log('Parent eating chicken biryani');
    };
    return UrFather3;
}());
var U3 = /** @class */ (function (_super) {
    __extends(U3, _super);
    function U3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    U3.prototype.eating = function () {
        _super.prototype.eating.call(this);
        console.log('Child eating mutton biryani');
    };
    return U3;
}(UrFather3));
console.log('--Accessing Child Members--');
var childob1 = new U3();
childob1.eating();
