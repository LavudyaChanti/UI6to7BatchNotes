var SqaureCube = /** @class */ (function () {
    function SqaureCube() {
    }
    SqaureCube.prototype.sqaure = function () {
        console.log('Sqaure is:' + (this.num * this.num));
    };
    SqaureCube.prototype.cube = function () {
        console.log('Cube is:' + (this.num * this.num * this.num));
    };
    return SqaureCube;
}());
//object creation
var ob = new SqaureCube();
//initializing values
ob.num = 10;
//calling function
ob.sqaure();
ob.cube();
