function createCar(manufacturer, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    args.forEach(function (arg) {
        car[arg.key] = arg.value;
    });
    return car;
}
// Example usage
var myCar = createCar("Toyota", "Camry", { key: "color", value: "blue" }, { key: "year", value: 2023 });
console.log(myCar);
