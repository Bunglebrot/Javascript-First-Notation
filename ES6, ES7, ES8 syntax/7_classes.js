// в новом синтаксисе добавилось ключевое слово class
// где в фигурных скобках описывается тело этого класса.
// Если мы хотим определить конструктор, используем функцию constructor
// и в неё мы получаем определённый набор параметров
class Person {
  // внутри класса можно создавать переменные
  type = 'human'
  constructor(name){
    // теперь у инстанса этого класса будет поле name
    this.name = name
  }
  // внутри класса можно создавать методы
  greet(){
    console.log(this.name + ' говорит - "ПРИВЕТ!"')
  }
}

const max = new Person('Max')
console.log(max)
max.greet()
console.log(max.type)

// На уровне прототипов это работает просто
console.log(max.__proto__ === Person.prototype)
// теперь можно намного удобнее описывать наследование внутри классов
// при помощи ключевого слова extends далее имя класса родителя
class Programmer extends Person {
// если нужно реализовать метод конструктора
// учитывая, что мы наследуемся от какого-то класса,
// нужно внутри конструктора обратится к методу super()
// что позволит вызывать родительский метод + дополнение своего
  constructor(name, job){
    super(name)
    this._job = job
  }

  get job(){
    return this._job.toUpperCase()
  }
  // сеттеры полезны для валидации функции
  set job(job){
    if(job.length < 2){
      console.log('Валидация не прошла')
    }else{
      this._job = job
    }
  }

  greet() {
    super.greet()
    console.log(`Наследник приветствует и его имя ${this.name}`)
  }
}

const frontend = new Programmer('Maxim', 'Frontend')
console.log(frontend)
frontend.greet()

// В классах теперь доступен функционал геттеров и сеттеров
// вместо того чтобы обращаться к какому-либо полю объекта
// можно сделать для него геттер -> строка 37 - 47
console.log(frontend.job)
frontend.job = '1'
console.log(frontend.job)
frontend.job = 'Backend'
console.log(frontend.job)

// Static methods в классах присутствуют статические методы
class Util {
  static average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length
  }
}
// Для того чтобы воспользоваться функцией average класса Util
// мы не можем обратиться к Util.average(...) - необходимо
// сначала создать инстанс класса и обращаться через него.
// const util = new Util()
// console.log(util.average(1, 1, 2, 3, 5, 8, 13, 21))

// Но если сделать метод статическим, используя ключевое слово static
// можно сразу обратиться к методу класса Util,
// иногда это бывает полезно
const res = Util.average(12, 18, 5, 99, 7)
console.log(res)