var datas = [];
currentData = "";
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  getQuotes();
});
function getRandomNumber() {
  let randomString = Math.random() * 10;
  let randomNumber = +randomString.toString()[0];
  return randomNumber % 10;
}
async function getQuotes() {
  const url = "https://6874f813dd06792b9c9618b9.mockapi.io/Quotes";

  if (datas.length == 0) {
    document.getElementById("quote-card").style.display = "none";
    document.getElementById("loader").style.display = "flex";
    const response = await fetch(url);
    if (response.ok) {
      const jsonData = await response.json();
      datas = jsonData;

      let randomQuote = jsonData[getRandomNumber()];
      currentData = randomQuote.quote;
      console.log(randomQuote);
      document.getElementById("quote-data").innerHTML = randomQuote.quote;
      document.getElementById("author-data").innerHTML = randomQuote.author;
      document.getElementById("quote-card").style.display = "flex";
      document.getElementById("loader").style.display = "none";
    }
  }
}
function onNewQuoteButtonClicked() {
  randomQuote = datas[getRandomNumber()];
  currentData = randomQuote.quote;
  document.getElementById("quote-data").innerHTML = randomQuote.quote;
  document.getElementById("author-data").innerHTML = randomQuote.author;
}

function shareTweet() {
  console.log(currentData)
  window.open("https://twitter.com/intent/tweet?text=" + currentData.toString());
}
