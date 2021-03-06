// Промисы это удобная конструкция, позволяющая работать с асинхронным кодом.
// Это класс, который в конструктор принимает колбэк
// и в данном колбэке нужно описать какую-либо асинхронность.
// При этом колбэк (executor) принимает два параметра resolve и reject
// Resolve - при успешном возвращении результата функции
// Reject  - для описания выкинутой ошибки
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success')
  }, 500)
})
// У этого объекта присутствуют три метода - catch, then и finally
// Then - базовый метод. Он будет вызван тогда, когда закончится асинхронный код
promise.then(data => console.log(data))
// 
const delay = ms => new Promise((resolve, reject) => {
  setTimeout(() => resolve(`Done! ${ms}`), ms)
})
// Теперь мы можем вызывать функцию delay и каждый раз она будет возвращать новый promise
delay(1000).then(data => console.log(data))
// Также можно чейнить промисы и тем самым возврщать новый промис
delay(1500)
  .then(data => delay(500))
  .then(data => console.log(data))
// Catch - ловит ошибку(при использовании reject) если она есть для дальнейшей её обработки
const delayRej = ms => new Promise((resolve, reject) => {
  setTimeout(() => reject(`Done! ${ms}`), ms)
})
// Теперь мы можем вызывать функцию delay и каждый раз она будет возвращать новый promise
delayRej(1000).then(data => console.log(data))
// Также можно чейнить промисы и тем самым возврщать новый промис
delayRej(1500)
  .then(data => delayRej(500))
  .then(data => console.log(data))
  .catch(err => console.log(err))
  // Finally - метод вызывается в любом случае, когда промис завершается, даже если была ошибка
  .finally(() => console.log('FINALLY!'))

// Для более удобной работы с промисами можно воспользоваться новым синтаксисом async await
// для этого достаточно создать функцию и сделать её асинхронной с помощью ключевого слова async
// после внутри неё можно использовать оператор await, к которому мы должны применить промис
async function asyncDelay() {
  const data = await delay(2000)
  // == delay(2000).then(data => delay(500)
  console.log(data)
}
// Данный подход хорош тем, что мы находимся на плоском уровне 
// т.е. у нас нет погружения во внутренние колбэки
asyncDelay()
// при использовании в данной конструкции reject - необходимо воспользоваться try - catch для отлова ошибок

// Два важных метода, которые позволяют работать с группой промисов
// Порой это удобно для загрузки данных с сервера
// Метод all принимает в себя массив промисов
// Метод all ждёт пока завершатся все промисы и после выдаёт массив результатов всех промисов
Promise.all([
  delay(1000),
  delay(500),
  delay(3000)
]).then(data => console.log(data))
// Метод race работает немного иначе, он ждёт когда выполнится самый быстрый промис из массива
Promise.all([
  delay(1000),
  delay(500),
  delay(3000)
]).then(data => console.log(data))