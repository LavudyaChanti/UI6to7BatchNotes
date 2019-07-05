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
var UrFather = /** @class */ (function () {
    function UrFather() {
        this.pproperty = 1000000;
    }
    return UrFather;
}());
var U = /** @class */ (function (_super) {
    __extends(U, _super);
    function U() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cproperty = 500000;
        return _this;
    }
    return U;
}(UrFather));
console.log('--Accessing Parent Members--');
var pob1 = new UrFather();
console.log(pob1.pproperty);
console.log('--Accessing Child Members--');
var cob1 = new U();
console.log(cob1.pproperty);
console.log(cob1.cproperty);
