// Динамические ключи объектов - внутри объекта используется ['name'] == ключ объекта
// их идея в том, что, описывая ключи в [], внутри также можно писать какую-то динамику,
// которая в итоге станет ключом этого объекта - пример с city.
// Когда ключ и значение совпадают, можно писать только имя ключа - пример с job
const cityField = 'city'
const job = 'Frontend'

const person = {
  age: 26,
  name:'Irina',
  job,
  'country-live': 'Russia',
  [cityField + Date.now()]: 'Spb',
  toString(){
    return Object
      .keys(this)
      .filter(key => key != 'toString')
      .map(key => this[key])
      .join(' ')
  }
}
console.log(person.toString())
// Object.keys() - новая функция, которая позволяет взять ключи у объекта и пробежаться по ним
// нововведения >>ES6>> если мы описываем функцию внутри объекта, 
// то необязательно писать ключевое слово function и : после ключа метода
// + можно создавать функции\методы, которые будут является стрелочными функциями,
// но они могут делать лишь базовые вещи, т.к. не могут работать с контекстом(this) этого объекта
person.print = () => 'Person'
console.log(person.print())
console.log(person)

// Новые методы для работы с объектами
// метод is - проверяет на эквивалентность значения объектов
console.log(Object.is(20, 10))
const first = {a: 1}
const second = {b: 2}
const theard = {c: 3}
// assign - позволяет объединять определённые объекты
// при этом первый объект изменится
console.log(Object.assign(first, second))
console.log(first) / console.log(second)
// Если нужно создать новый объект - нужно использовать {} - первым параметром
console.log(Object.assign({}, second, theard))
console.log(second) / console.log(theard)

const obj = Object.assign({}, second, {
  c: 2,
  d: 3
})
// метод entries форматирует объект в ассоциативный массив(такой же как в PHP)
console.log(Object.entries(obj))
// возвращает массив ключей объекта
console.log(Object.keys(obj))
// возвращает массив значений объекта
console.log(Object.values(obj))