import './style.css'

document.querySelector('.app').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

const app = document.querySelector('[data-js = "app"]')
const btnlink = document.querySelector('[data-js="btn"]')

btnlink.addEventListener('click', (event) => {
  event.preventDefault()
  app.style.display = app.style.display === "none" ? "block" : "none"
})
