const test = "apple";

function testFunction() {
  const test = "orange";

  if (1 === 1) {
    const test = 2;
  }

  console.log(test);
}

testFunction();
console.log(test);
