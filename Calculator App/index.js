const displayScreen = document.querySelector('.displayScreen');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
   item.onclick = () =>{
      
      if(item.id == 'all-Clear')
         displayScreen.innerText = '';
      
         else if(item.id == 'clear'){ 
            let str = displayScreen.innerText.toString();
            displayScreen.innerText = str.substr(0, str.length - 1);
            }

      else if(displayScreen != '' && item.id == '='){
         displayScreen.innerText = eval(displayScreen.innerText);
      }

      else{
         displayScreen.innerText += item.id; 
      }
   }
})