const countryContainer = document.querySelector(".container");
const filterRegion = document.querySelector("select");
const searchInput = document.querySelector("#search");
const theme = document.querySelector("#mode");

let allCountries;
let isDark = false;
let isDarkMode = JSON.parse(localStorage.getItem('Dark')) 

applyTheme();

if(isDarkMode){
  isDark = true
} else{
  isDark = false
}

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    renderCountryCard(data);
    allCountries = data;
  });

filterRegion.addEventListener("change", (e) => {
  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((response) => response.json())
    .then(renderCountryCard);
});

function renderCountryCard(data) {
  countryContainer.innerHTML = "";
  data.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `/WorldView/country.html?name=${country.name.common}`;

    const cardHtml = `<img src="${country.flags.svg}" alt="flag" />
        <div class="card-content">
          <h4 class="c-name">${country.name.common}</h4>
          <p><b>Population: </b> ${country.population.toLocaleString(
            "en-IN"
          )}</p>
          <p><b>Region: </b> ${country.region}</p>
          <p><b>Capital: </b> ${country.capital}</p>
        </div>`;

    countryCard.innerHTML = cardHtml;

    countryContainer.append(countryCard);
  });
}

searchInput.addEventListener("input", (e) => {
  // console.log(e.target.value);
  //country.name.common.includes(e.target.value)

  let filterResult = allCountries.filter((country) =>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );

  //console.log(e.target.value);
  renderCountryCard(filterResult);
  // console.log(filterResult);
});

theme.addEventListener("click", () => {
  if (isDark) {
    isDark = false;
    theme.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp; Dark Mode`;
    document.body.classList.remove("dark");
    localStorage.setItem("Dark", true);
  } else {
    isDark = true;
    theme.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp; Light Mode`;
    document.body.classList.add("dark");
    localStorage.setItem("Dark", false);
  }
});

function applyTheme(){
  if (isDarkMode) {
    theme.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp; Dark Mode`;
    document.body.classList.remove("dark");
  } else {
    theme.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp; Light Mode`;
    document.body.classList.add("dark");
  }
}
