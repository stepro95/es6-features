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
