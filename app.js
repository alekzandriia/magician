// DOM Elements 
const password = document.getElementById('password')
const length = document.getElementById('length')
const useLowercase = document.getElementById('lowercase')
const useUppercase = document.getElementById('uppercase')
const useNumbers = document.getElementById('numbers')
const useSymbols = document.getElementById('symbols')
const generateBtn = document.getElementById('generate')
const strength = document.getElementById('strength')

// Show user selected character length
const lengthNum = document.getElementById('lengthNum')
lengthNum.textContent = length.value;
length.addEventListener('input', () => {
  lengthNum.textContent = length.value;
})

// Character Bank 
const numbers = [1,2,3,4,5,6,7,8,9,0]
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"]
const charCodes = Array.from(Array(26)).map((_, i) => i + 97)
const lowerCaseLetters = charCodes.map(code => String.fromCharCode(code))
const upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase())

// Get Random Char from Array
function getRandomChar(arr) {
  let index = Math.floor(Math.random() * arr.length)
  return arr[index]
}
// generate Password
function generatePassword() {
let generatedPassword = ""
for (let i = 0; i < length.value ; i++) {
  if (useLowercase.checked) {
    generatedPassword += getRandomChar(lowerCaseLetters)
  }
  if (useUppercase.checked) {
    generatedPassword += getRandomChar(upperCaseLetters)
  }
  if (useNumbers.checked) {
    generatedPassword += getRandomChar(numbers)
  }
  if (useSymbols.checked) {
    generatedPassword += getRandomChar(symbols)
  }
}
let finalPassword = generatedPassword.slice(0, length.value);
return finalPassword;
}

// Button Functionality
generateBtn.addEventListener('click', (e) => {
  e.preventDefault()
  password.value = null
  password.value = generatePassword()
  calculateStrength()
})

// Strength indicator
function calculateStrength() {
let strengthCounter = 0;
if (password.value && length.value >= 12) {
  strengthCounter++
}
if (useLowercase.checked) {
  strengthCounter++
}
if (useUppercase.checked) {
  strengthCounter++
}
if (useNumbers.checked) {
  strengthCounter++
}
if (useSymbols.checked) {
  strengthCounter++
}
  if (strengthCounter === 0) {
  strength.textContent = ""
} else if (strengthCounter === 1) {
  strength.textContent = "very weak"
} else if (strengthCounter === 2) {
  strength.textContent = "weak"
} else if (strengthCounter === 3) {
  strength.textContent = "medium"
} else if (strengthCounter === 4) {
  strength.textContent = "strong"
} else if (strengthCounter === 5) {
  strength.textContent = "very strong"
}
}