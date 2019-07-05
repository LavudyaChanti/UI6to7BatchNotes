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
//Inheritance with constructor
/**
 * Emp parent class                     (id,name)
 * RegEmp as child1 class               (salary)
 * ContractEmp as child2 class          (payperday)
 */
var Emp = /** @class */ (function () {
    function Emp(id, name) {
        console.log('--parent class constructor--');
        this.id = id;
        this.name = name;
    }
    return Emp;
}());
var RegEmp = /** @class */ (function (_super) {
    __extends(RegEmp, _super);
    function RegEmp(id, name, salary) {
        var _this = this;
        console.log('--Child1 class constructor--');
        _this = _super.call(this, id, name) || this;
        _this.salary = salary;
        return _this;
    }
    RegEmp.prototype.printregempdata = function () {
        console.log('ID=' + this.id + ' NAME=' + this.name + ' SALARY=' + this.salary);
    };
    return RegEmp;
}(Emp));
var e1 = new RegEmp(501, 'Ajay', 45000.50);
e1.printregempdata();
