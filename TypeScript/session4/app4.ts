function getSum(a: number, b?:number) 
{
        if (b)
            return a+b
        else
            return a;
}
    
let result1 = getSum(10,20);              
console.log(result1)  
let result2 = getSum(100);              
console.log(result2)  
 