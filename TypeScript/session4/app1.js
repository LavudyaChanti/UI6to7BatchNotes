function show(a, b) 
{
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    console.log('a=' + a);
    console.log('b=' + b);
    console.log('c=' + c);
}
show(10, 20);
show(10, 20, 30, 40, 50, 60);
