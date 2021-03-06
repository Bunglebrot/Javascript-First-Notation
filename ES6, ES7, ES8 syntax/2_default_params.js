// новый синтаксис позволяет подставлять в параметры функции значения по умолчанию
function compute(a, b = 24){
  return a + b
}
// важен порядок передачи аргументов, лучше задавать все параметры по дефолту при необходимости
console.log(compute(66))
// также можно использовать в качестве параметров по умолчанию значения переменных или результат выполнения другой функции
const Pi = 3.1415
function areaCircle(r, pi = Pi){
  return 2 * pi * r ** 2
}
console.log(areaCircle(2))
// такой синтаксис избавляет от прохождения большого количества проверок
// и позволяет более гибко взаимодействовать с кодом
const getDefault = c => c * 2
function computeFun(a = 10, b = getDefault(a)){
  return a + b
}
console.log(computeFun(30))