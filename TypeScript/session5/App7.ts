//Inheritance with Functions
class UrFather2
{
    eating():void
    {
        console.log('Parent eating chicken biryani');
    }
}
class U2 extends UrFather2
{
    eating():void
    {
        console.log('Child eating mutton biryani');
    }
}
console.log('--Accessing Child Members--')
let childob=new U2()
childob.eating()
