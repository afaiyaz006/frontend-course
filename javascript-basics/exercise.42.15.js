const array = [0, null, undefined, "", 2, 3];

function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) {
      count += 1;
      console.log("Symbol: " + value + " ");
    }
  }
  console.log(count);
}
countTruthy(array);
