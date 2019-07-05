class SqaureCube
{
    num:number
    sqaure():void
    {
        console.log('Sqaure is:'+(this.num*this.num))
    }
    cube():void
    {
        console.log('Cube is:'+(this.num*this.num*this.num))
    }
}
//object creation
let ob=new SqaureCube()
//initializing values
ob.num=10
//calling function
ob.sqaure()
ob.cube()