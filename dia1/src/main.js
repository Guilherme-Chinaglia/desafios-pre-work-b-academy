import './style.css'

const appContent = document.querySelector("#app");

appContent.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

/*Exercício 4*/

const visibilityButton = document.querySelector("[data-js=link-visibilidade]");


visibilityButton.addEventListener('click', (e)=>{
  e.preventDefault();
  appContent.classList.toggle('hide');
});
