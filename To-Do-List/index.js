let inputBox = document.querySelector('.input-box');
let listContainer = document.querySelector('#list-container');
let addTaskButton = document.querySelector('#addButton');

addTaskButton.addEventListener('click', addTask);


function addTask(){
  if(inputBox.value ===''){
    alert('Nothing to add');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
};

listContainer.addEventListener('click', function deleteTask(event){
  if(event.target.tagName === 'LI'){
    event.target.classList.toggle('checked');
    saveData();
  } else if(event.target.tagName === 'SPAN'){
    event.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem('data', listContainer.innerHTML);
}

function showData(){
  listContainer.innerHTML = localStorage.getItem('data');
}
showData();
