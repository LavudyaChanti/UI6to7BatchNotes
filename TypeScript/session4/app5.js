var Human = /** @class */ (function () {
    function Human() {
    }
    //Behaviours(Functions)
    Human.prototype.printdata = function () {
        console.log('Name=' + this.name);
        console.log('Age=' + this.age);
        console.log('Height=' + this.height);
    };
    Human.prototype.eating = function (item) {
        console.log(this.name + ' eating ' + item + ' food item');
    };
    Human.prototype.sleeping = function (noh) {
        console.log(this.name + ' sleeping ' + noh + ' hours per day');
    };
    return Human;
}());
var p1 = new Human();
p1.name = 'Ajay';
p1.age = 22;
p1.height = 5.3;
p1.printdata();
p1.eating('Chiken Biryani');
p1.sleeping(8);
