class Sum1
{
    n1:number;
    n2:number;
    constructor(t1:number,t2:number)
    {
        this.n1=t1
        this.n2=t2
    }
    sum():void
    {
        console.log(this.n1+this.n2)
    }
}
//create an objcet1
let s1=new Sum1(10,20)
//calling function
s1.sum()
//create an objcet2
let s2=new Sum1(100,2000)
//calling function
s2.sum()