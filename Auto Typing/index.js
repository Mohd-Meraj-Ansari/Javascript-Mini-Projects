const span = document.querySelector("span");
const wordsArr = ["Developer.", "Engineer.", "Plane Spotter."];

let wordIndex = 0;
let charId = 0;
let reverse = false;

setInterval(() => {
  if (!reverse) {
    span.innerText = span.innerText + wordsArr[wordIndex][charId];
    charId++;
  } else {
    span.innerText = span.innerText.slice(0, span.innerText.length - 1);
  }

  if (charId === wordsArr[wordIndex].length) {
    reverse = true;
  }

  if (span.innerText.length === 0 && reverse) {
    reverse = false;
    charId = 0;
    wordIndex++;
  }

  if (wordIndex === wordsArr.length) {
    wordIndex = 0;
  }
}, 150);
