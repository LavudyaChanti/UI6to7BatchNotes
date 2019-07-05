//Inheritance with Functions with super() keyword
class UrFather3
{
    eating():void
    {
        console.log('Parent eating chicken biryani');
    }
}
class U3 extends UrFather3
{
    eating():void
    {
        super.eating();
        console.log('Child eating mutton biryani');
    }
}
console.log('--Accessing Child Members--')
let childob1=new U3()
childob1.eating()
