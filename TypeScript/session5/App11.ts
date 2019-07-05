interface SubInterface
{
    getsub(a:number,b:number):void
}
class P1 implements SubInterface
{
    getsub(a:number,b:number):void
    {
        console.log(a-b)
    }
}
class P2 implements SubInterface
{
    getsub(a:number,b:number):void
    {
        if(a>b)
            console.log(a-b)
        else
            console.log(b-a)
    }
}
let tlob1=new P1()
tlob1.getsub(100,800)
let tlob2=new P2()
tlob2.getsub(100,700)