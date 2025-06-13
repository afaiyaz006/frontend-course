numbers = [1, 2, 3, 4, 5, 6];

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("Invalid exception");
  }
  return array.reduce((accumulator, current) => {
    const occurence = current == searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
try {
  const count = countOccurrences(null, 1);

  console.log(count);
} catch (e) {
  console.log(e.message);
}
