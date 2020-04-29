// эти новые операторы очень похожи, но отличаются контекстом своего выполнения
// в ES5 использовалось arguments - специальное поле - оно же псевдомассив, который сожержит все 
// переданные в функцию аргументы. Но оно не имеет такие методы массивов, как reduce и т.д.
// REST
// Если мы не знаем, какое количество параметров\аргументов поступает к нам в функцию
// то используется оператор REST (...variable). Перед ним можно ставить известное количество параметров
function average(a, ...args){
  return args.reduce((acc, i) => acc += i, 0) / args.length
}
console.log(average(10, 20, 30, 40, 50, 90))
// SPREAD
// этот оператор позволяет развернуть массив
const array = [1, undefined, 5, 8, 13, 21]
console.log(...array)
// применяется в объекте Math если в качестве аргумента передавать массив будет ошибка
console.log(Math.max(...array))
// ... для клонирования массивов
const fib = [1, ...array]
console.log(fib)
// Destructuring - данный функционал позволяет более быстро получать определённые значения
// Вместо
// const a = array[0]
// const b = array[1]
const [a, b = 42, ...c] = array
console.log(a, b, c)
// валидная запись при задании переменных
const [d,, e] = array
console.log(d, e)
// REST & SPREAD в объектах
const address = {
  country: 'Russia',
  city: 'Piter',
  // street: 'Lenin',
  concat: function(){
    return `${this.country} ${this.city} ${this.street}`
  }
}
// console.log(address.concat())
// Деструктуризация - синтаксис для работы внутри объектов
// также в переменные можно передавать значения по умолчанию
// для передачи из объектов функций используется следующий способ
// const {country, city, street = 'Nevskyi', concat: addressConcat} = address
// console.log(addressConcat.call(address))
// console.log(street)

const {city, ...rest} = address
console.log(city)
console.log(rest)
// внутри объекта таким образом можно развернуть другой объект применив оператор spread
// при этом можно в этом объекте менять поля
const newAddress = {...address, street: 'Kazanskaya', code: 123}
console.log(newAddress)