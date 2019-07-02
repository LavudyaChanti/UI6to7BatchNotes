//JS
function foo1()         //Called function
{
    console.log('foo1')
}
foo1()                  //Calling Function
//TS
function foo2():void     //Called function
{
    console.log('foo2')
}
foo2()                  //Calling Function
//JS
function sum1(a,b)         //Called function
{
    return (a+b)
}
console.log(sum1(1,2))                 //Calling Function
//TS
function sum2(a:number,b:number):number  //Called function
{
    return (a+b)
}
console.log(sum2(10,20))          //Calling Function