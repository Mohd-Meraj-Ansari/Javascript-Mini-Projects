const input = document.querySelector("input");
const lowerCase = document.querySelector("#lower-case span");
const upperCase = document.querySelector("#upper-case span");
const camelCase = document.querySelector("#camel-case span");
const pascalCase = document.querySelector("#pascal-case span");
const snakeCase = document.querySelector("#snake-case span");
const kebabCase = document.querySelector("#kebab-case span");
const trimCase = document.querySelector("#trim span");

function capitalStr(str) {
  if (!str) return str;
  const charC = str[0].toUpperCase();
  const newStr = charC + str.slice(1, str.length);
  return newStr;
}

function toCamel(str) {
  const lowerStr = str.toLowerCase();
  const wordArr = lowerStr.split(" ");
  const finalArr = wordArr.map((word, i) => {
    if (i === 0) {
      return word;
    }
    return capitalStr(word);
  });
  return finalArr.join(" ");
}

function toPascal(str) {
  const lowerStr = str.toLowerCase();
  const wordArr = lowerStr.split(" ");
  const finalArr = wordArr.map((word) => {
    return capitalStr(word);
  });
  return finalArr.join(" ");
}

function toSnake(str) {
  return str.replaceAll(" ", "_");
}

function toKebab(str) {
  return str.replaceAll(" ", "-");
}

function trim(str) {
  return str.replaceAll(" ", "");
}

function update() {
  lowerCase.innerText = input.value.toLowerCase();
  upperCase.innerText = input.value.toUpperCase();
  camelCase.innerText = toCamel(input.value);
  pascalCase.innerText = toPascal(input.value);
  snakeCase.innerText = toSnake(input.value);
  kebabCase.innerText = toKebab(input.value);
  trimCase.innerText = trim(input.value);
}

//update();

input.addEventListener("input", update);
