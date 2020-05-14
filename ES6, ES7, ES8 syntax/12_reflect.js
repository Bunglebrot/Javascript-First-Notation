// Reflect метод программирования в джс, который структурировал большое количество функций,
// позволяющие работать с метаданными + в нём есть много новых методов
class Student {
  constructor(name) {
    this.name = name
  }
  greet(){
    console.log(`Hi! My name is ${this.name}`)
  }
}
class ProtoStudent {
  university = 'Oxford'
}
// в метод construct передаётся первым параметром функция target
// вторым параметром массив тех аргументов, которые попадут в контруктор
// также у метода construct существует третий параметр, который будет являться прототипом для инстанса
// это работает как Object create, только более современный подход
const student = Reflect.construct(Student, ['Igor'])
// т.е. теперь student имеет поля класса Student, но его __proto__ === ProroStudent.prototype
console.log(student)

// Методы Reflect
// apply - позволяет вызывать какие-либо методы с нужным контекстом и с нужными параметрами
// первым параметром принимает какой-либо метод, вторым - контекст вызова, 
// третьим - набор аргументов нужные для первого параметра (метода)
Reflect.apply(student.greet, {name: 'Tester'}, [])
// следующий метод позволяет узнавать какие есть собственные ключи у объекта, передаваемом в параметр
console.log(Reflect.ownKeys(student))
// с помощью Reflect можно блокировать модификацию объекта (добавление\изменение полей)
Reflect.preventExtensions(student)
student.age = 25
console.log(student)
// узнать заблокирован объект для модификации можно при помощи следующего метода - false == заблокирован
console.log(Reflect.isExtensible(student))