import { Color, Solver } from './color.js'

// Images

const themeButtonImage = document.getElementById('theme-button-image')
const logo = document.getElementById('logo')
const title = document.querySelector('img[alt="elia boscaini"]')

// Buttons

const themeButton = document.getElementById('theme-button')

const codeBlocks = document.querySelectorAll('pre.highlight')

// Event Listeners

themeButton.addEventListener('click', _ => {
    changeTheme(document.body.className)
  }
)

// Functions

function setTheme(theme){
  if (theme == 'dark'){
    setDarkTheme()
  }
  else{
    setLightTheme()
  }
}

function changeTheme(theme){
  if (theme == 'light'){
    setDarkTheme()
  }
  else{
    setLightTheme()
  }
}

function setDarkTheme(){
  storeTheme('dark')
  themeButtonImage.src = themeButtonImage.src.replace('moon', 'sun')
  document.body.className = 'dark'
  updateSvgColor()
}

function setLightTheme(){
  storeTheme('light')
  themeButtonImage.src = themeButtonImage.src.replace('sun', 'moon')
  document.body.className = 'light'
  updateSvgColor()
}

function updateSvgColor(){
  const bodyBackgroudColor = window.getComputedStyle(document.body, null).getPropertyValue('background-color')
  const bodyColor = window.getComputedStyle(document.body, null).getPropertyValue('color')
  const hihglightColor = window.getComputedStyle(document.body, null).getPropertyValue('accent-color')
  changeSvgColor(logo, hihglightColor)
  changeSvgColor(themeButtonImage, bodyBackgroudColor)
  if (title != null){
    changeSvgColor(title, bodyBackgroudColor)
  }
  const copyImages = document.querySelectorAll('img.copy-button-image')
  console.log(copyImages)
  copyImages.forEach(function (copyImage) {changeSvgColor(copyImage, bodyBackgroudColor)})

  logo.addEventListener('mouseover', _ => {changeSvgColor(logo, bodyColor)})
  logo.addEventListener('mouseout', _ => {changeSvgColor(logo, hihglightColor)})
}

function changeSvgColor(svg, color){
  const rgb = color.substring(4, color.length-1).replace(/ /g, '').split(',')
  const color_solver = new Color(rgb[0], rgb[1], rgb[2])
  const solver = new Solver(color_solver)
  const result = solver.solve()
  svg.style = result.filter
}

function storeTheme (theme) {
  localStorage.setItem('theme', theme)
}

function addCopyButtons(){
  codeBlocks.forEach(function (codeBlock) {
    console.log('fired')
    var  button = document.createElement('button')
     button.className = ' '
     button.type = 'button'
     button.ariaLabel = 'Copy code to clipboard'
     var  image = document.createElement('img')
     image.src = "assets/images/copy.svg"
     image.height = "20"
     image.width = "20"
     image.className = "copy-button-image"
     button.appendChild(image)
  
  
    codeBlock.append( button)
  
  
    button.addEventListener('click', function () {
      var code = codeBlock.querySelector('code').innerText.trim()
      console.log(code)
      navigator.clipboard.writeText(code)

    })
  })
}

// Init

function initSVGsColors(){
  const activeTheme = localStorage.getItem('theme')
  setTheme(activeTheme)
  addCopyButtons()
  updateSvgColor()
}

function initPage(){
  initSVGsColors()
}

document.onload = initPage()