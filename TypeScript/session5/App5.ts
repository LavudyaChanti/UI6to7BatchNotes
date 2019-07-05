//Inheritance with data
class UrFather
{
    pproperty:number=1000000;
}
class U extends UrFather
{
    cproperty:number=500000;
}
console.log('--Accessing Parent Members--')
let pob1=new UrFather()
console.log(pob1.pproperty)
console.log('--Accessing Child Members--')
let cob1=new U()
console.log(cob1.pproperty)
console.log(cob1.cproperty)