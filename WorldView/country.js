const cName = document.getElementById("country-Name");
const native = document.getElementById("native");
const population = document.getElementById("pop");
const region = document.getElementById("reg");
const subRegion = document.getElementById("sub-reg");
const capital = document.getElementById("cap");
const currency = document.getElementById("cur");
const language = document.getElementById("lan");
const image = document.querySelector("img");
const borderCountries = document.querySelector(".border-country");
const theme = document.querySelector("#mode");

const countryName = new URLSearchParams(location.search).get("name");

let isDark = false;
let isDarkMode = JSON.parse(localStorage.getItem('Dark')) 

applyTheme();

if(isDarkMode){
  isDark = true
} else{
  isDark = false
}

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((response) => response.json())
  .then(([country]) => {
    image.src = country.flags.svg;
    cName.innerText = country.name.common;

    if (country.name.nativeName) {
      native.innerText = Object.values(country.name.nativeName)[0].common;
    } else {
      native.innerText = "No native name";
    }

    population.innerText = country.population.toLocaleString("en-IN");
    region.innerText = country.region;

    if (country.subregion) {
      subRegion.innerText = country.subregion;
    } else {
      subRegion.innerText = "No Sub Region";
    }

    if (country.capital) {
      capital.innerText = Object.values(country.capital).join(", ");
    } else {
      capital.innerText = "No Capital City";
    }

    if (country.currencies) {
      currency.innerText = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ");
    } else {
      currency.innerText = "No Official Currency";
    }

    if (country.languages) {
      language.innerText = Object.values(country.languages).join(", ");
    } else {
      language.innerText = "No Official Language";
    }

    if (country.borders) {
      country.borders.forEach((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((response) => response.json())
          .then(([borderCountry]) => {
            const CountryTag = document.createElement("a");
            CountryTag.className = "border-a";
            CountryTag.innerText = borderCountry.name.common;
            CountryTag.href = `/WorldView/country.html?name=${borderCountry.name.common}`;
            borderCountries.append(CountryTag);
          });
      });
    }
  });

theme.addEventListener("click", () => {
  if (isDark) {
    isDark = false;
    localStorage.setItem("Dark", true);
    theme.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp; Dark Mode`;
    document.body.classList.remove("dark");
  } else {
    isDark = true;
    localStorage.setItem("Dark", false);
    theme.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp; Light Mode`;
    document.body.classList.add("dark");
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

