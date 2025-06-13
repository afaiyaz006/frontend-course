function move(array, index, offset) {
  const output = [...array];
  const move_position = index + offset;
  if (move_position > array.length - 1) {
    throw Error("Invalid position");
  }
  const removed_element = output.splice(index, 1)[0];
  output.splice(move_position, 0, removed_element);
  return output;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const output = move(numbers, 0, 1);
console.log(output);
