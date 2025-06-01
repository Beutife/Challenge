var myArray = /** @class */ (function () {
    function myArray(car) {
        this.cars = car;
    }
    myArray.prototype.addCar = function (value) {
        var addCars = this.cars.push(value);
        console.log("".concat(value, " added to car "));
        console.log(addCars);
    };
    myArray.prototype.myForEach = function (callback) {
        for (var i = 0; i < this.cars.length; i++) {
            callback(this.cars[i], i, this.cars);
        }
        return callback;
    };
    return myArray;
}());
var arr = new myArray(['Benz', 'Toyota', 'Stone', 'Beuz']);
console.log(arr);
arr.addCar('Honda');
arr.myForEach(function (value, index, array) {
    console.log("".concat(index, ": ").concat(value));
});
console.log(arr.cars);
