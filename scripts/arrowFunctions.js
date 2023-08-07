// Normal function
function area(r) {
  return Math.PI * r ** 2;
}

// Arrow function
const areaArrow = (r) => {
  return Math.PI * r ** 2;
};

// Shorter arrow function
const areaArrowShort = (r) => Math.PI * r ** 2;

console.log(area(2));
console.log(areaArrow(2));
console.log(areaArrowShort(2));

// --------------
// Method example
// --------------

const dacia = {
  brand: "Dacia",
  fuel: "LPG",
  canParkUnderground: function () {
    return this.fuel !== "LPG"; // This is the "dacia" object in this case
  },
};

const porsche = {
  brand: "Porsche",
  fuel: "Electric",
  canParkUnderground: () => this.fuel !== "LPG", // This is still the global object
};

console.log(dacia.canParkUnderground());
console.log(porsche.canParkUnderground());
