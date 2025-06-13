function isPrimeNumber(n) {
  isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
for (let i = 2; i <= 100; i += 1) {
  console.log(i.toString() + " --> " + isPrimeNumber(i).toString());
}
