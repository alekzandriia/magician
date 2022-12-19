const password = document.getElementById('password')
const length = document.getElementById('length')
const lengthNum = document.getElementById('lengthNum')
const useLowercase = document.getElementById('lowercase')
const useUppercase = document.getElementById('uppercase')
const useNumbers = document.getElementById('numbers')
const useSymbols = document.getElementById('symbols')
const generateBtn = document.getElementById('generate')

// show user selected range input number
length.addEventListener('input', () => {
  lengthNum.textContent = length.value;
})

function generatePassword() {
  let newPassword = 0;
}

