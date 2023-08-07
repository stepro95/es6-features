const testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomInt = Math.round(Math.random() * 10);

    randomInt > 5 ? resolve("Success!") : reject("Something went wrong!");
  }, 250);
});

console.log(await testPromise.catch((error) => error));

const response = testPromise
  .then(
    (successMessage) => {
      console.log(successMessage);
    },
    (error) => {
      console.log(error);
    }
  )
  .finally(() => {
    console.log("This executes in all cases.");
  });
