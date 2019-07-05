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
var UrFather1 = /** @class */ (function () {
    function UrFather1() {
    }
    UrFather1.prototype.peating = function () {
        console.log('Parent eating chicken biryani');
    };
    return UrFather1;
}());
var U1 = /** @class */ (function (_super) {
    __extends(U1, _super);
    function U1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    U1.prototype.ceating = function () {
        console.log('Child eating mutton biryani');
    };
    return U1;
}(UrFather1));
console.log('--Accessing Parent Members--');
var pob = new UrFather1();
pob.peating();
console.log('--Accessing Child Members--');
var cob = new U1();
cob.peating();
cob.ceating();
