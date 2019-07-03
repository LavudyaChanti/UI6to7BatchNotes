//Callback functions final understanding app3

function addition(a, b , callback)
{ 
    console.log(`The sum of ${a} and ${b} is ${a+b}.`);  
    callback(); 
} 

addition(15,16,function disp()
{ 
    console.log('Body from call back function'); 
}); 