var x = 10;
console.log('global,x=' + x);
if (true) {
    var x = 20;
    console.log('inside if,x=' + x);
}
console.log('after if,x=' + x);
function myfun1() {
    var x = 30;
    console.log('inside myfun1,x=' + x);
}
myfun1();
console.log('after fun1,x=' + x);
console.log('-------------------------');
var y = 100;
console.log('global,y=' + y);
if (true) {
    var y_1 = 200;
    console.log('inside if,y=' + y_1);
}
console.log('after if,y=' + y);
function myfun2() {
    var y = 300;
    console.log('inside myfun2,y=' + y);
}
myfun2();
console.log('after myfun2,y=' + y);
