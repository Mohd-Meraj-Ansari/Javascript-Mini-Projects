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

const countryName = new URLSearchParams(location.search).get("name");
//console.log(countryName);

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((response) => response.json())
  .then(([country]) => {
    console.log(country.name.common);

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
            CountryTag.innerText = borderCountry.name.common;
            CountryTag.href = `/WorldView/country.html?name=${borderCountry.name.common}`
            // console.log(CountryTag);
            borderCountries.append(CountryTag);
          });
      });
    }
  });
