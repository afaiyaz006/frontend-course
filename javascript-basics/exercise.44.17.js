function sumOfThreeAndFiveMultiples(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i += 1) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfThreeAndFiveMultiples(100));
