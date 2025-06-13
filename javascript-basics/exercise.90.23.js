const movies = [
  {
    title: "a",
    year: 2018,
    rating: 4.5,
  },
  {
    title: "b",
    year: 2018,
    rating: 4.5,
  },
  {
    title: "c",
    year: 2018,
    rating: 4.5,
  },
];
movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(movies);
