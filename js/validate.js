let EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/
let INPUT = document.getElementById('emailField')

//Функция для вывода сообщения об ошибке
function getError(message, formClass) {
  let error = document.createElement('div')
  error.className = 'error'
  error.style.color = 'red'
  error.innerHTML = message
  insertAfterElement(error, formClass)
  formClass.style.borderColor = 'red'
}

// Функция для валидации логина
function checkLogin(regexp, input) {
  if (input.value === '') {
    getError('Email не может быть пустым!', input)
    return false
  }
  if (regexp.test(input.value)) {
    input.style.borderColor = 'green'
    return true
  } else {
    input.style.borderColor = 'red'
    getError('Неверный Email', input)
    return false
  }
}

// Фуннкция для валидации пароля
function checkPassword() {
  let passwordField = document.getElementById('passwordField').value
  if (passwordField === '') {
    getError('Пароль не может быть пустым!', allInputs[1])
    return false
  }
  if (passwordField.length < 6) {
    getError('Пароль слишком короткий!', allInputs[1])
    return false
  }
  if (passwordField.search(/[a-z]/) < 0) {
    getError('В пароле должны быть буквы в нижнем регистре!', allInputs[1])
    return false
  }
  if (passwordField.search(/[A-Z]/) < 0) {
    getError('В пароле должны быть буквы в верхнем регистре!', allInputs[1])
    return false
  }
  if (passwordField.search(/[0-9]/) < 0) {
    getError('В пароле должны быть цифры!', allInputs[1])
    return false
  }
  allInputs[1].style.borderColor = 'green'
  return true
}

let form = document.querySelector('.signin-form')
let allInputs = form.querySelectorAll('.input')

//Функция для вставки элемента после родильского элемента
function insertAfterElement(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

form.addEventListener('submit', function (event) {
  event.preventDefault()

  let error = document.getElementsByClassName('error')
  if (error.length !== 0) {
    Array.from(error).forEach((element) => {
      element.parentNode.removeChild(element)
    })
  }
  checkLogin(EMAIL_REGEXP, INPUT)
  checkPassword()
})
