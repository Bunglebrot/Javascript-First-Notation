// это приватная переменная
const privateVariable = 42
export const COLOR = '#bababa'
// файлы в джаваскрипте являются модулями
// чтобы экспортировать переменные \ функции в другие модули, чтобы они могли её увидеть
// используется ключевое слово export
export function compute(a, b){
  return a + b
}
// чтобы объединять модули, необходимо настраивать например webpack, в консоли результат не виден..

// другой синтаксис
// когда мы используем export default, мы не привязыны к какому-либо имени
// чаще лучше использовать именованые экспорты и импорты
// потому что IDE подсказывает какие поля присутствуют в объекте
export default {
  log(){
    console.log(privateVariable)
  }
}