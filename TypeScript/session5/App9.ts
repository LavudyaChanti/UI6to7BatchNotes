//Inheritance with constructor
/**
 * Emp parent class                     (id,name)
 * RegEmp as child1 class               (salary)
 * ContractEmp as child2 class          (payperday)
 */     
class Emp
{
    id:number
    name:string
    constructor(id:number,name:string)
    {
        console.log('--parent class constructor--')
        this.id=id
        this.name=name
    }
}
class RegEmp extends Emp
{
    salary:number
    constructor(id:number,name:string,salary:number)
    {
        console.log('--Child1 class constructor--')
        super(id,name)
        this.salary=salary
    }
    printregempdata():void
    {
        console.log('ID='+this.id+' NAME='+this.name+' SALARY='+this.salary)
    }
}
let e1=new RegEmp(501,'Ajay',45000.50)
e1.printregempdata()