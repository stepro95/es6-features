// Array destructuring
let fruits = ["Apple", "Banana", "Orange", "Strawberry", "Pineapple", "Pear"];
const [a, b, c, d, ...rest] = fruits;

console.log(c);
console.log(rest);

// Object destructuring
let person = {
  name: "Dries",
  age: 25,
  drunk: false,
};

let { name, age, drunk = false } = person;
console.log(`${name}, ${age}, ${drunk ? "is wasted" : "is sober"}`);

// Function object destructuring
getPersonString = ({ name, age }) => `${name}, ${age}`;
console.log(getPersonString(person));
