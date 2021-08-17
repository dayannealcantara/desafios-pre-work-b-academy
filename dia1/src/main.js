import './style.css'

document.querySelector('.app').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const link = document.querySelector(' [data-js="link"]')

link.addEventListener('click', (event) => {
  event.preventDefault()
  console.log('clicou!', event.currentTarget)
}, false)
