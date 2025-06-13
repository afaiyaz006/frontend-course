const marks = [80, 80, 50];

function calculateGrade(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i += 1) {
    sum += marks[i];
  }
  let avg = sum / marks.length;
  if (avg < 40) {
    console.log("F");
  }
  if (avg < 60) {
    console.log("D");
  }
  if (avg < 70) {
    console.log("C");
  }
  if (avg < 80) {
    console.log("A");
  } else {
    console.log("A+");
  }
}

calculateGrade(marks);
