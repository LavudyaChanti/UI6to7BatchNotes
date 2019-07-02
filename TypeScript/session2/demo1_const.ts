//1.before variable
const a=10
console.log(a)
//You can modify  a value
//a=15   Error
//2.before arrays
const ar=[10,20,30];
// You can change an element:
ar[0]=500
console.log("ar="+ar);
// You can add an element:
ar.push(100)
console.log("ar="+ar);
//But you can NOT reassign a constant array:
//ar=[1,2,3]  Error
//3.before objects
const emp={'eid':501,'ename':'ram'};
console.log(emp.eid+" "+emp.ename);
//you can NOT reassign a constant object:
//emp={'eaddress':'hyd'}  ERROR
console.log(emp.eid+" "+emp.ename+" ");