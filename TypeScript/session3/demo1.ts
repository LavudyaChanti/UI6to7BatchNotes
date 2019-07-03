//1.Function	declaration
function sum1(a:number,b:number):number
{
    return (a+b);
}
console.log(sum1(1,2))
//2.Function	expression
let sum2=function(a:number,b:number):number
{
    return (a+b);
}
console.log(sum2(10,20))
//3.Arrow function ex1
let sum3=(a:number,b:number)=>
{
    let c:number=a+b;
    return c;
}
console.log(sum3(100,200))
//3.Arrow function ex2
let sum4=(a:number,b:number)=>a+b;
console.log(sum4(1000,2000))
//4.Arrow function ex3
let sum5=(a,b)=>a+b;
console.log(sum5(5,6))
//4.Arrow function ex3
let inc=a=>a+1;
console.log(inc(8))
    