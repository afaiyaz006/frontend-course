function fizzbuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    console.log("FizzBuzz");
  } else if (input % 3 === 0) {
    console.log("Fizz");
  } else if (input % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(input);
  }
}
for (let i = 1; i <= 100; i += 1) {
  fizzbuzz(i);
}
