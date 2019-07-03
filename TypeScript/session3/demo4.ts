//Callback functions understanding app1
function fun2(x)
{
    return x*x;
}
function fun1(a,b,c)
{
    console.log(a+b+c)
}
fun1(10,20,fun2(3));


