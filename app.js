// DOM Elements 
const password = document.getElementById('password')
const length = document.getElementById('length')
const useLowercase = document.getElementById('lowercase')
const useUppercase = document.getElementById('uppercase')
const useNumbers = document.getElementById('numbers')
const useSymbols = document.getElementById('symbols')
const generateBtn = document.getElementById('generate')

// Show user selected character length
const lengthNum = document.getElementById('lengthNum')
function updateSlider() {
  lengthNum.textContent = length.value;
}
length.addEventListener('input', updateSlider)
updateSlider()

// Character Bank 
const numbers = [1,2,3,4,5,6,7,8,9,0]
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
const charCodes = Array.from(Array(26)).map((_, i) => i + 97)
const lowerCaseLetters = charCodes.map(code => String.fromCharCode(code))
const upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase())


//  Generate Password

function generatePassword(length, useLowercase, useUppercase, useNumbers, useSymbols ) {
  const availableCharacters = [
    ...(useNumbers ? numbers : []),
    ...(useSymbols ? symbols : []),
    ...(useUppercase ? upperCaseLetters : []),
    ...(useLowercase ? lowerCaseLetters : []),
  ]

  let newPassword = ""
  
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * availableCharacters.length)
    newPassword += availableCharacters[index]
  }
  console.log(newPassword)
}


// Button Functionality

generateBtn.addEventListener('click', generatePassword )

generatePassword()