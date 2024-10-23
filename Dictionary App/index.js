const input = document.querySelector("input");
const search_Btn = document.querySelector("button");
const card = document.querySelector(".dictionary-card");

search_Btn.addEventListener("click", createCard);

async function getData(word) {
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await fetch(URL).then((response) => response.json());

  return response[0];
}
function parseWords(words) {
  const parsedWords = {
    synonyms: [],
    partOfSpeeches: [],
  };

  if (!words) {
    return parsedWords;
  }

  const synonymItems = [];
  const partOfSpeeches = [];

  const { meanings = [] } = words;

  for (const meaning of meanings) {
    const { partOfSpeech = [], synonyms = [] } = meaning;

    synonymItems.push(...synonyms);
    partOfSpeeches.push(partOfSpeech);
  }

  parsedWords.synonyms = synonymItems;
  parsedWords.partOfSpeeches = partOfSpeeches;

  return parsedWords;
}

async function createCard() {
  const data = await getData(input.value);

  const parsedWords = parseWords(data);
  console.log("parseWords -> ", parsedWords);

  const partOfSpeechArray = [];
  let synonymsArray = [];

  for (let i = 0; i < data.meanings.length; i++) {
    partOfSpeechArray.push(data.meanings[i].partOfSpeech);

    synonymsArray.push(data.meanings[i].synonyms);
  }
  console.log(synonymsArray);
  synonymsArray = synonymsArray.flat();

  console.log(synonymsArray);
  console.log(partOfSpeechArray);

  card.innerHTML = `<div class="card">
            
            <div class="property">
               <span> Word: </span>
               <span>${data.word}</span>
            </div>

            <div class="property">
               <span> Phonetics: </span>
               <span>${data.phonetics[1].text}</span>
            </div>
            
            <div class="property">
               <span> 
               <audio controls src="${data.phonetics[0].audio}"></audio>
               </span>
               
            </div>

            <div class="property">
               <span> Synonyms: </span>
               <span>${synonymsArray.map((e) => e).join(", ")} </span>
            </div>

            <div class="property">
               <span> Example: </span>
               <span>${data.meanings[1].definitions[0].example}</span>
            </div>
            
            <div class="property">
               <span> Parts of Speech: <span>
                  <span>${partOfSpeechArray.map((e) => e).join(", ")}</span>
            </div>

         </div>
      </div>`;
}
