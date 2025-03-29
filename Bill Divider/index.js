const billButton = document.getElementById("generate-bill");
const resetButton = document.getElementById("reset");
const billAmountDisplay = document.getElementById("bill-display");
const totalAmount = document.getElementById("totalAmt");
const perPersonAmount = document.getElementById("perPerson");
const tipAmount = document.getElementById("tip-am");
const billAmountInput = document.getElementById("bill-ip");
const customTipInput = document.getElementById("second-ip");
const noOfPersonsInput = document.getElementById("third-ip");
const tipsContainer = document.querySelector(".tipContainer");

const tipValueOutput5 = document.getElementById("tipvalue5");
const tipValueOutput10 = document.getElementById("tipvalue10");
const tipValueOutput15 = document.getElementById("tipvalue15");
const tipValueOutput20 = document.getElementById("tipvalue20");
const tipValueOutput25 = document.getElementById("tipvalue25");
const tipValueOutput50 = document.getElementById("tipvalue50");

let tipPercentage = 0;
let billAmount = 0;
let noOfPersons = 0;
let tipAmt = 0;
let TotalBill = 0;

billButton.addEventListener("click", generateBill);
resetButton.addEventListener("click", resetBill);

function generateBill() {
  billAmount = parseInt(billAmountInput.value);
  noOfPersons = parseInt(noOfPersonsInput.value);

  tipAmt = billAmount * (tipPercentage / 100);
  TotalBill = billAmount + tipAmt;

  perPersonAmount.innerText = `₹ ${TotalBill / noOfPersons}`;
  billAmountDisplay.innerText = `₹ ${billAmount}`;
  totalAmount.innerText = `₹ ${TotalBill}`;
  tipAmount.innerText = `₹ ${tipAmt}`;
}

tipsContainer.addEventListener("click", (e) => {
  if (tipsContainer.classList.contains("disabled")) return;
  if (e.target !== tipsContainer) {
    [...tipsContainer.children].forEach((tip) => {
      tip.classList.remove("selected");
    });
    e.target.classList.add("selected");
    tipPercentage = parseInt(e.target.innerText);
    customTipInput.value = "";
  }
});

customTipInput.addEventListener("input", () => {
  tipPercentage = parseInt(customTipInput.value);
  [...tipsContainer.children].forEach((tip) => {
    tip.classList.remove("selected");
  });
});

function resetBill() {
  billAmountDisplay.innerText = `₹ 0`;
  totalAmount.innerText = `₹ 0`;
  tipAmount.innerText = `₹ 0`;
  perPersonAmount.innerText = `₹ 0`;

  billAmountInput.value = "";
  customTipInput.value = "";
  noOfPersonsInput.value = "";
  [...tipsContainer.children].forEach((tip) => {
    tip.classList.remove("selected");
  });

  customTipInput.disabled = true;
  noOfPersonsInput.disabled = true;
  tipsContainer.classList.add("disabled");
  billButton.disabled = true;
  resetButton.disabled = true;

  tipValueOutput5.innerHTML = "";
  tipValueOutput15.innerHTML = "";
  tipValueOutput20.innerHTML = "";
  tipValueOutput10.innerHTML = "";
  tipValueOutput25.innerHTML = "";
  tipValueOutput50.innerHTML = "";

}

billAmountInput.addEventListener("input", () => {
  if (billAmountInput.value) {
    billAmount = parseInt(billAmountInput.value);

    tipValueOutput5.innerHTML =  `₹ ${(billAmount * (5 / 100)).toFixed(2)}`;
    tipValueOutput10.innerHTML = `₹ ${(billAmount * (10 / 100)).toFixed(2)}`;
    tipValueOutput15.innerHTML = `₹ ${(billAmount * (15 / 100)).toFixed(2)}`;
    tipValueOutput20.innerHTML = `₹ ${(billAmount * (20 / 100)).toFixed(2)}`;
    tipValueOutput25.innerHTML = `₹ ${(billAmount * (25 / 100)).toFixed(2)}`;
    tipValueOutput50.innerHTML = `₹ ${(billAmount * (50 / 100)).toFixed(2)}`;

    customTipInput.disabled = false;
    noOfPersonsInput.disabled = false;
    tipsContainer.classList.remove("disabled");
    billButton.disabled = false;
    resetButton.disabled = false;
  } else {
    tipValueOutput5.innerHTML = "";
    tipValueOutput15.innerHTML = "";
    tipValueOutput20.innerHTML = "";
    tipValueOutput10.innerHTML = "";
    tipValueOutput25.innerHTML = "";
    tipValueOutput50.innerHTML = "";

    customTipInput.disabled = true;
    noOfPersonsInput.disabled = true;
    tipsContainer.classList.add("disabled");
    billButton.disabled = true;
    resetButton.disabled = true;
    resetBill();
  }
});

// noOfPersonsInput.addEventListener("input", () => {
//   if (tipPercentage) {
//     billButton.disabled = false;
//   } else {
//     billButton.disabled = true;
//   }
// });
