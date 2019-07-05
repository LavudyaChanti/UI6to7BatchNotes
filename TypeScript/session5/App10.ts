/**
 Rule for inheritance in Classes:
--------------------------------
One time only one class can be inherited
 */     
class C1
{}
class C2
{}
class C3 extends C1,C2 //Error:Classes can only extend a single class
{

}