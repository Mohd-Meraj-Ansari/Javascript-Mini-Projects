const countryContainer = document.querySelector(".container");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");

      const cardHtml = `<img src="${country.flags.svg}" alt="flag" />
          <div class="card-content">
            <h4 class="c-name">${country.name.common}</h4>
            <p><b>Population: </b> ${country.population.toLocaleString('en-IN')}</p>
            <p><b>Region: </b> ${country.region}</p>
            <p><b>Capital: </b> ${country.capital}</p>
          </div>`;

      countryCard.innerHTML = cardHtml;

      countryContainer.append(countryCard);
    });
  });
