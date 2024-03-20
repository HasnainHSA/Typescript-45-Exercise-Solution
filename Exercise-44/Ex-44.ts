// defining the object types
interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

// creating a function
function createCar(manufacturer: string, model: string, ...args: { key: string; value: any }[]): Car {
  const car: Car = { manufacturer, model };

  args.forEach(arg => {
    car[arg.key] = arg.value;
  });

  return car;
}

// // calling the function
const myCar = createCar("Toyota", "Camry", { key: "color", value: "blue" }, { key: "year", value: 2023 });
console.log(myCar);
