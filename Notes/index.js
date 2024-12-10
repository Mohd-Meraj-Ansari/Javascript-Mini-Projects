let addButton = document.getElementById("add-btn");
let deleteButton = document.querySelector(".deleteNote");
let addNote = document.getElementById("add-Note");

addButton.addEventListener("click", function () {
  document.querySelector(".addTask").style.display = "block";
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
});

deleteButton.addEventListener("click", function () {
  document.querySelector(".addTask").style.display = "none";
});

addNote.addEventListener("click", function () {
  document.querySelector(".addTask").style.display = "none";
  let div = document.createElement("div");
  div.classList.add("newNotes");
  div.innerHTML = `<h2>${document.getElementById("title").value}</h2>
  <p>${document.getElementById("desc").value}</p>
  <button id='delete'>Delete</button>`;

  document.querySelector(".newNote").appendChild(div);
  div.querySelector("button").addEventListener("click", function () {
    div.remove();
  });
});
