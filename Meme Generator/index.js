const generateButton = document.querySelector("button");
const memeTitle = document.querySelector("h3");
const memeImage = document.querySelector("img");

const URL = "https://meme-api.com/gimme/wholesomememes";

generateButton.addEventListener("click", getMeme);

function getMeme() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const { title, url } = data;
      memeTitle.innerText = title;
      memeImage.src = url;
    });
}

getMeme();