//Callback functions final understanding app4
function A(x) {
    console.log('Hi1');
    x();
}
A(function () {
    console.log('Hi2');
});
