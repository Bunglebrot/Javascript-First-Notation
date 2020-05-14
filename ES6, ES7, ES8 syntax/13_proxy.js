// Proxy - это класс позволяющий добавлять определённые ловушки на любые объекты, функции и классы
// С помощью прокси можно круто защищать большое количество данных и придумывать свой функционал
const validator = {
  // второй параметр для proxy будет отслеживать получение каких-либо данных из нужного объекта
  get(target, prop){
    return prop in target ? target[prop] : `Поля ${prop} в объекте нет!`
  },
  // можно задавать ловушки также для сеттеров
  set(target, prop, value){
    if (value.length > 2) {
      Reflect.set(target, prop, value)
    } else {
      console.log('Длинна должна быть больше двух символов', `сейчас ${value.length}`)
    }
  }
}

const form = {
  login: 'tester',
  password: '12345'
}
// Первым параметром необходимо передавать объект, за которым нужно следить
// Вторым - объект proxy-handler'ов т.е. тех ловушек, которые характерны для прокси
const formProxy = new Proxy(form, validator)
console.log(formProxy.login)
console.log(formProxy.password)
// если поля в объекте нет -> вызывается метод get и выполняется проверка
console.log(formProxy['userName'])
// 
formProxy.password = '12'
console.log(formProxy)
// Разница между геттерами\сеттерами и прокси в том, что мы можем менять любые объекты в прокси
// при этом набор правил остаётся предыдущим

function log(message){
  console.log('[Log]: ', message)
}
// target   - та функция, которую хотим вызвать
// thisArg  - контекст
// argArray - массив передаваемых параметров
const proxy = new Proxy(log, {
  apply(target, thisArg, argArray) {
    if (argArray.length === 1) {
      Reflect.apply(target, thisArg, argArray)
    } else {
      console.log('Количество аргументов не совпадает')
    }
  }
})

proxy('Custom message')
proxy()
proxy('Custom message', 2)