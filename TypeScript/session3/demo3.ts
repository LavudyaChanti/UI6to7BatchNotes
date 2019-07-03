//Normal function definition
function sayhello()        
{
  console.log('Hello world');
}
sayhello();
//IIFE Ex1
(function(){
    console.log('Good Evening');
})
();
//IIFE Ex1
(function(a,b)
{
    console.log('Sum is:'+(a+b));
})
(10,20);
