const input = document.querySelector('[data-js="username"]')

const dontChange = ['da', 'das', 'de', 'do', 'dos']

input.addEventListener('input', (e) => {
  const valueAsArray = e.target.value.split(' ')
  console.log('valueAsArray:', valueAsArray)

  e.target.value = valueAsArray.map((word) => {
    return dontChange.includes(word.toLowerCase())
    ? word.toLowerCase()
    : fixCase(word)
  }).join(' ')
})

function fixCase (word) {
  if (word.lenght === 0) {
    return ''
  }

 return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
}

function $ (selector) {
  return document.querySelector(selector)
}

const form = $('[data-js="form"]')
const select = document.createElement('select')

const colors = ['#4682B4', '#008000', '#FF1493', 'FF0000', '#FFFF00']
const colorsContainer = document.createElement('div')
colorsContainer.style.display = 'flex'

colors.forEach(color => {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color
  select.appendChild(Option)
})

select.setAttribute('multiple', '');
form.appendChild(select)

select.addEventListener('change', (e) =>{
  colorsContainer.innerHTML = ''

  Array.from(e.target.selectedOptions).forEach(option => {
    const div = createDivColor(option.value)
    colorsContainer.appendChild(div)
  })
})

function createDivColor (value) {
  const div = document.createElement('div')
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.background = value
  return(div)
}

select.setAttribute('multiple', '')
form.appendChild(select)
document.body.appendChild(colorsContainer)

console.log(select)
