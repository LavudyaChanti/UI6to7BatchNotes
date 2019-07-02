//1.before variable
var a = 10;
console.log(a);
//a=15   Error
//2.before arrays
var ar = [10, 20, 30];
console.log("ar=" + ar);
ar[0] = 100;
console.log("ar=" + ar);
//3.before objects
var emp = { 'eid': 501, 'ename': 'ram' };
console.log(emp.eid + " " + emp.ename);
emp.sal = 45000;
console.log(emp.eid + " " + emp.ename + " " + emp.sal);
