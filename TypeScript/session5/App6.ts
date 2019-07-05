//Inheritance with Functions
class UrFather1
{
    peating():void
    {
        console.log('Parent eating chicken biryani');
    }
}
class U1 extends UrFather1
{
    ceating():void
    {
        console.log('Child eating mutton biryani');
    }
}
console.log('--Accessing Parent Members--')
let pob=new UrFather1()
pob.peating();
console.log('--Accessing Child Members--')
let cob=new U1()
cob.peating();
cob.ceating();