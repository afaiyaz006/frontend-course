function isLandscape(width, height) {
  if (width > height) {
    return true;
  } else {
    return false;
  }
}
console.log("Landscape: " + isLandscape(800, 600));
console.log("Landscape: " + isLandscape(1000, 800));
console.log("Landscape: " + isLandscape(400, 600));
