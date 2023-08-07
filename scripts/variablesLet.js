let test = "apple";

function testFunction() {
  let test = "orange";

  if (1 === 1) {
    let test = 2;
  }

  console.log(test);
}

testFunction();
console.log(test);
