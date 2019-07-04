function getSum(a, b) {
    if (b)
        return a + b;
    else
        return a;
}
var result1 = getSum(10, 20);
console.log(result1);
var result2 = getSum(100);
console.log(result2);
