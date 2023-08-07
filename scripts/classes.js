class Vehicle {
  constructor(model, power, weight, numberOfWheels, fuelSource) {
    this.model = model;
    this.power = power;
    this.weight = weight;
    this.numberOfWheels = numberOfWheels;
    this.fuelSource = fuelSource;
  }

  get powerToWeight() {
    return this.calcPowerToWeight();
  }

  calcPowerToWeight() {
    return this.power / this.weight;
  }
}

class Car extends Vehicle {
  constructor(model, power, weight, fuelSource) {
    super(model, power, weight, 4, fuelSource);
  }

  get roadTaxes() {
    return this.calculateRoadTaxes();
  }

  calculateRoadTaxes() {
    return this.fuelSource === "electric" ? 0 : Math.random() * this.power;
  }
}

const trabant = new Car("Trabant", 20, 700, "petrol");
const taycan = new Car("Taycan", 800, 2000, "electric");
const bicycle = new Vehicle("Canyon", 0.2, 100, 2, "food");

console.log(trabant);
console.log(bicycle);

console.log(`\nTrabant: 
  Tax: ${trabant.roadTaxes}
  Power to weight: ${trabant.powerToWeight}

Taycan:
  Tax: ${taycan.roadTaxes}
  Power to weight: ${taycan.powerToWeight}`);
