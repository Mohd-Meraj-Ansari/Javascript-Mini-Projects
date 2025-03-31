const countryName = new URLSearchParams(location.search).get("name");
console.log(countryName);

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((response) => response.json())
  .then(console.log);

