import './style.css'

const form = document.querySelector('[data-js="cars-form"]')
const table =  document.querySelector('[data-js="table"]')

const getFormElemenet = ( event ) => (elementName) =>{
  console.log(event.target.elements[elementName])
  return event.target.elements[elementName]
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const getElement = getFormElemenet(e)
  const image = getElement('image')
  const brandModel = getElement('brand-model')
  const year = getElement('year')
  const color = getElement('color')
  const plate = getElement('plate')

  const elements = [image, brandModel, year, color, plate]

  const tr = document.createElement('tr')
  elements.forEach(element => {
    const td = document.createElement('td')
    td.textContent = element.value
    tr.appendChild(td)
  })
  table.appendChild(tr)

  e.target.reset()
  image.focus()
})

