// Array destructuring
let fruits = ["Apple", "Banana", "Orange", "Strawberry", "Pineapple", "Pear"];
const [a, b, c, d, ...rest] = fruits;

console.log(c);
console.log(rest);

// Object destructuring
let person = {
  name: "Dries",
  age: 25,
  abilities: { canCode: true },
  drunk: false,
};

let { name, age, drunk = false } = person;
console.log(`${name}, ${age}, ${drunk ? "is wasted" : "is sober"}`);

// Function object destructuring
const getPersonString = ({ name, age, abilities: { canCode } }) =>
  `${name}, ${age}: can code? ${canCode}`;
console.log(getPersonString(person));
