// Итераторы
const array = [10, 20, 30, 40]
const str = 'Hello'
// для массивов и для строк по умолчанию определён symbol.iterator
console.log(array[Symbol.iterator])
console.log(array[Symbol.iterator])
// мы можем итеративно получать элементы у тех объектов
// для которых определён Symbol.iteretor
const iter = array[Symbol.iterator]()
console.log(iter)
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
// флаг done - говорит закончил ли итератор проход по массиву
const iterStr = str[Symbol.iterator]()
console.log(iterStr.next())
console.log(iterStr.next())
console.log(iterStr.next())
console.log(iterStr.next())
console.log(iterStr.next())
console.log(iterStr.next())

// 
for (let item of array){
  console.log(item)
}
for (let item of str){
  console.log(item)
}
// этим можно воспользоваться для создания собственных итераторов,
// применяя Symbol.iterator, мы можем описывать свою кастомную логику,
// для того чтобы было более удобно с этим работать и взаимодействовать
const country = {
  values: ['ru', 'kz', 'ua', 'by'],
  [Symbol.iterator](){
    let i = 0
    return {
      next: () => {
        const value = this.values[i]
        i++
        return {
          done: i > this.values.length,
          value
        }
      }
    }
  }
}
for (let item of country){
  console.log(item)
}

// Генераторы
// основная их идея - мы создаём функцию, и чтобы сделать её генератором
// перед её именем нужно ставить *
function *gen(num = 4) {
  for (let i = 0; i < num; i++) {
    try {
      yield i
    } catch(e) {
      console.log('Error', e)
    }
  }
}

const iter2 = gen(3)
console.log(iter2.next())
console.log(iter2.next())
// c помощью оператора throw можно выкидывать ошибки на определённой итерации
console.log(iter2.throw('MY Error!!!'))
console.log(iter2.next())
console.log(iter2.next())

for (let i of gen(5)) {
  console.log(i)
}