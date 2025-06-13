function evenOdd(limit) {
  for (let i = 0; i <= limit; i += 1) {
    if ((i & 1) == 0) {
      console.log(i, "EVEN");
    } else {
      console.log(i, "ODD");
    }
  }
}
evenOdd(100);
