//Функция для вывода часов
function getClock() {
  let currentdate = new Date()
  let days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ]
  let day = days[currentdate.getDay()]
  let datetime =
    currentdate.getDate() +
    '/' +
    (currentdate.getMonth() + 1) +
    '/' +
    currentdate.getFullYear() +
    '   ' +
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes() +
    ':' +
    currentdate.getSeconds() +
    '   ' +
    day
  document.getElementById('clock').innerHTML = datetime
}
setInterval(getClock, 1)
