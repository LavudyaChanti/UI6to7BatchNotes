class Sum
{
    n1:number;
    n2:number;
    sum():void
    {
        console.log(this.n1+this.n2)
    }
}
//create an objcet1
let ob1=new Sum()
//initializing values
ob1.n1=10
ob1.n2=20
//call function
ob1.sum()
//create an objcet2
let ob2=new Sum()
//initializing values
ob2.n1=100
ob2.n2=200
//call function
ob2.sum()
