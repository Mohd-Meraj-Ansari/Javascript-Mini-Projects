const formData = document.getElementById("search-image");
const data = document.getElementById("input-field");
const contentArea = document.getElementById("content-area");
const showMoreBtn = document.getElementById("show-more");
const searchArea = document.getElementById('search-area')


let page = 1;
const accessKey = "";

async function getData() {
  const query = data.value;
  const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}&per_page=12`;

  let response, responseData;

    response = await fetch(URL)
    responseData = await response.json();
  
  if (page === 1) {
    contentArea.innerHTML = "";
  }

  const results = responseData.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);

    contentArea.appendChild(imageLink);
  });

  showMoreBtn.style.display = "block";
}

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  getData();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  getData();
});
