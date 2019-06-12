function fun1()
{
   var x= document.getElementById('id1').value
   alert('Ur Name is:'+x)
   return true
}
function fun2()
{
    b=confirm('Are u sure to delete?')
    if(b==true)
    {
        return true
    }
    else
    {
        return false
    }
}