let fruits = ["Banana", "Orange", "Strawberry", "Grapes", "Apple"];
let numbers = [5, 2.21, 33, 100, 1];

const fruitsSorted = [...fruits].sort();
const numbersSorted = [...numbers]
  .sort((a, b) => a - b)
  .map((number) => number + 5);

const arrayJoined = [...fruits, ...numbers];
const scoredArray = fruits
  .map((fruit, i) => ({
    fruit,
    score: numbers[i],
  }))
  .sort(({ score: a }, { score: b }) => b - a);

console.log(fruitsSorted);
console.log(numbersSorted);
console.log(arrayJoined);
console.log(scoredArray);
console.log(...arrayJoined);
