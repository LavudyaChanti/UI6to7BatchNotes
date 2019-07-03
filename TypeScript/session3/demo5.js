//Callback functions understanding app2
function add(a, b, foo) {
    console.log("The sum of " + a + " and " + b + " is " + (a + b) + ".");
    foo();
}
function disp() {
    console.log('Body from call back function');
}
add(10, 20, disp);
