var test = "apple";

function testFunction() {
  var test = "orange";

  if (1 === 1) var test = 2;

  console.log(test);
}

testFunction();
console.log(test);
