const number = document.getElementById("display");
const incrementButton = document.getElementById("inc");
const decrementButton = document.getElementById("dec");
const inputTag = document.getElementById("ip");
const resetButton = document.getElementById("reset");

let counter = 0;
let customInput = 0;

incrementButton.addEventListener("click", () => {
  customInput = Number(inputTag.value);
  counter = counter + customInput;
  console.log(counter);
  number.innerText = counter;
});

decrementButton.addEventListener("click", () => {
  customInput = Number(inputTag.value);
  counter = counter - customInput;
  console.log(counter);
  number.innerText = counter;
});

resetButton.addEventListener("click", () => {
  counter = 0;
  customInput = 0;
  inputTag.value = 0;
  number.innerText = 0;
});
