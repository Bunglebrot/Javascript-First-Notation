// новый синтаксис определения функций == лямбда-функции \ лямбда-выражения
const foo = () => {}
// если функция == процедура, т.е. возвращаемое значение в одну строку, можно опустить {} 
// и обязательно опустить оператор return
const sum = (a, b) => a + b
console.log(sum(1, 255))
// если функция принимает один аргумент, т.е. имеет один параметр на вход, то круглые скобки можно опустить
// оператор ** - возведение в степень
const cube = a => a ** 3
console.log(cube(4))

function log(){
  console.log(this)
}
const arrowLog = () => console.log(this)

const person = {
  name: 'Petrushka',
  age: 15,
  log: log,
  arrowFun: arrowLog,
  delayLog: function(){
  // так сохраняли контекст объекта в ES5-ом
    const self = this
    setTimeout(function(){
      console.log(self.name, self.age)
    }, 500)
  },
  // данная функция не создаёт своего контескта, и поэтому this будет указывать на person
  delayArrow: function(){
    setTimeout(() => {
      console.log(this.name, this.age)
    }, 1000)
  }
}
// при вызове данного метода, функция сработает ожидаемо. и в this будет сам объект person
person.log()
// при вызове этого метода, стрелочная функция ссылается на объект global при запуске в node 
// при запуске в браузере == window
person.arrowFun()
// у стрелочных функций отсутствует контекст, поэтому при обращении в ней к this,
// this будет указывать на контекст, который стоит выше
person.delayLog()
person.delayArrow()