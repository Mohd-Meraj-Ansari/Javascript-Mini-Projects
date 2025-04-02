const countryContainer = document.querySelector(".container");
const filterRegion = document.querySelector("select");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      // console.log(country.capital);
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
  });

filterRegion.addEventListener("change", (e) => {
  console.log(e.target.value);

  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      countryContainer.innerHTML = "";
      data.forEach((country) => {
        // console.log(country.capital);
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
    });
});
