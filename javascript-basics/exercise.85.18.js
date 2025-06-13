function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) {
      return true;
    }
  }
  return false;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(includes(numbers, 6));
console.log(includes(numbers, 10));
