const text = document.getElementById("ip");
const lowercaseTag = document.getElementById("lc");
const uppercaseTag = document.getElementById("uc");
const numberTag = document.getElementById("num");
const symbolTag = document.getElementById("sym");
const progressBar = document.querySelector(".progress-value");
const totalCharacter = document.querySelector("p span");
const passwordStrength = document.getElementById("str");

let passwordString;
let strChar = 0;

let lowerFlag;
let upperFlag;
let numberFlag;
let symbolFlag;

text.addEventListener("input", () => {
  passwordString = text.value;

  if (/[A-Z]/.test(passwordString)) {
    upperFlag = true;
    uppercaseTag.classList.add("detected");
  } else {
    upperFlag = false;
    uppercaseTag.classList.remove("detected");
  }

  if (/[a-z]/.test(passwordString)) {
    lowerFlag = true;
    lowercaseTag.classList.add("detected");
  } else {
    lowerFlag = false;
    lowercaseTag.classList.remove("detected");
  }

  if (/\d/.test(passwordString)) {
    numberFlag = true;
    numberTag.classList.add("detected");
  } else {
    numberFlag = false;
    numberTag.classList.remove("detected");
  }

  if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(passwordString)) {
    symbolFlag = true;
    symbolTag.classList.add("detected");
  } else {
    symbolFlag = false;
    symbolTag.classList.remove("detected");
  }

  totalCharacter.innerText = passwordString.length;

  let strength = getStrength(passwordString);
  passwordStrength.innerText = strength;
});

function getStrength(password) {
  let flags = [false, false, false, false];
  flags[0] = /[a-z]/.test(password);
  flags[1] = /[A-Z]/.test(password);
  flags[2] = /\d/.test(password);
  flags[3] = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);

  if (password.length >= 15 && flags.every((flag) => flag)) {
    progressBar.classList.remove("red");
    progressBar.classList.remove("yellow");
    progressBar.classList.add("green");

    if (password.length >= 15 && password.length <= 17) {
      progressBar.style.width = "80%";
    }
    if (password.length >= 18) progressBar.style.width = "100%";
    return "Strong";
  }

  let count = flags.filter((flag) => flag).length;

  if (
    (password.length >= 15 && count >= 1) ||
    (password.length >= 12 && count >= 2) ||
    (password.length >= 9 && count >= 3) ||
    (password.length >= 6 && count >= 4)
  ) {
    progressBar.classList.remove("red");
    progressBar.classList.remove("green");
    progressBar.classList.add("yellow");
    if (password.length >= 6 && password.length <= 8) {
      progressBar.style.width = "60%";
    } else if (password.length >= 9 && password.length <= 11) {
      progressBar.style.width = "70%";
    } else if (password.length >= 12 && password.length <= 15) {
      progressBar.style.width = "80%";
    }
    return "Medium";
  }

  progressBar.classList.remove("yellow");
  progressBar.classList.remove("green");
  progressBar.classList.add("red");
  if (password.length >= 4 && password.length <= 5) {
    progressBar.style.width = "30%";
  }
  if (password.length >= 6 && password.length <= 8) {
    progressBar.style.width = "40%";
  }
  if (password.length >= 9 && password.length <= 11) {
    progressBar.style.width = "50%";
  }
  if (password.length < 4) {
    progressBar.classList.remove("red");
    progressBar.classList.remove("yellow");
    progressBar.classList.remove("green");
  }
  return "Weak";
}

// function test() {
//   let numbers = [12, 12, 154, 5, 8, 87, 9898, 45, 5656, 7845, 6223, 0, 69, 68];

//   numbers.every((num) => num >= 0);

//   let ispositive = true;

//   for (let num = 0; num > numbers.length; num++) {
//     if (numbers[num] < 0) {
//       ispositive = false;
//       break;
//     }
//   }
//   console.log(ispositive);
// }

// test();

// let mapper = {
//   sum: function (num1, num2) {
//     return num1 + num2;
//   },
//   diff: function (num1, num2) {
//     return num1 - num2;
//   },
// };

// let operation = "diff";
// console.log(mapper[operation](1, 2));
