//1.Function	declaration
function sum1(a, b) {
    return (a + b);
}
console.log(sum1(1, 2));
//2.Function	expression
var sum2 = function (a, b) {
    return (a + b);
};
console.log(sum2(10, 20));
//3.Arrow function ex1
var sum3 = function (a, b) {
    var c = a + b;
    return c;
};
console.log(sum3(100, 200));
//3.Arrow function ex2
var sum4 = function (a, b) { return a + b; };
console.log(sum4(1000, 2000));
//4.Arrow function ex3
var sum5 = function (a, b) { return a + b; };
console.log(sum5(5, 6));
//4.Arrow function ex3
var inc = function (a) { return a + 1; };
console.log(inc(8));
