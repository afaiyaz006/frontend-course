var datas = [];
var page = 0;
function addImages(imageUrls) {
  let data = "";
  imageUrls.forEach((url) => (data += `<img src=${url}/>`));
//   console.log(data);
//   console.log(document.getElementById("images"));
  document.getElementById("images").innerHTML += data;
}
function showLoadingSpinner() {
  document.getElementById("spinner").style.display = "flex";
}
function hideLoadingSpinner() {
  document.getElementById("spinner").style.display = "none";
}
async function getImages(page, limit = 10) {
  const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
  showLoadingSpinner();
  const response = await fetch(url);

//   console.log(response);
  if (response.ok) {

    const jsonData = await response.json();
    datas = jsonData;
    console.log("API RESPONSE ")
    console.log(jsonData)
    imageUrls = [];
    datas.forEach((item) => imageUrls.push(item.download_url));
    addImages(imageUrls);
    hideLoadingSpinner();
  }
}
window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    console.log("Scrolled to the bottom of the page!");
    getImages(page + 1);
    console.log(page);
    page += 1;
  }
});
document.addEventListener("DOMContentLoaded", (event) => {
  getImages(page);
});
