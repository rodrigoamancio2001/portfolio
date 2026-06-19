// Pega os elementos
const switchCheckbox = document.getElementById('switch');
const body = document.getElementById('body');

// Aplica o modo salvo no Local Storage ou default (dark)
const savedMode = localStorage.getItem('darkMode');
if(savedMode === 'light'){
  body.classList.add('light-mode');
  switchCheckbox.checked = true;
} else {
  body.classList.remove('light-mode');
  switchCheckbox.checked = false;
}

// Quando o utilizador clica no switch
switchCheckbox.addEventListener('change', () => {
  if(switchCheckbox.checked){
    body.classList.add('light-mode');
    localStorage.setItem('darkMode', 'light'); // guarda escolha
  } else {
    body.classList.remove('light-mode');
    localStorage.setItem('darkMode', 'dark'); // guarda escolha
  }
});