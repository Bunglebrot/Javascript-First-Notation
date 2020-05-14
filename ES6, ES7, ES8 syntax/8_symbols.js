// этот тип данных нужен, чтобы задавать какие-то уникальные ключи
// т.е. он хранит уникальное значение.
// Используется от глобального класса Symbol
const symbol = Symbol('demo')
const other = Symbol('demo')
console.log(symbol)
console.log(other)
console.log(other === symbol)

const obj = {
  name: 'Elena',
  demo: 'DEMO',
  [symbol]: 'meta'
}
console.log(obj)
// поля заданные через символ сокрыты
// по сути символы нужны для задания каких-либо мета данных в объектах, функциях или классах
for(key in obj){
  console.log(key)
}
console.log(obj.demo)
console.log(obj[symbol])