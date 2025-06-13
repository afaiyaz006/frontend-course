const movie = {
  title: "Lorem10",
  releaseYear: 2025,
  rating: 4.5,
  director: "Lorem",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    console.log(key + " --> " + obj[key] + " --> " + typeof obj[key]);
  }
}
showProperties(movie);
