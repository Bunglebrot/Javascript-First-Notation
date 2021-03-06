// MAP & SET - структуры данных более продвинутые чем объекты и массивы
// Map - определяется через конструктор глобального класса Map
//  в конструктор Мэп мы можем помещать начальное значение
// оно должно быть представлено в формате entries т.е. асинхронного масива
const map = new Map(
  [ ['a', 1] ]
)
console.log(map)
// В отличие от простых объектов Мэп получает доступ при помощи метода get
console.log(map.get('a'))
// ключом в мэпе может быть любая сущность даже NaN
// Задание нового значения. т.к. set возвращает сам map, можно юзать чейнзапись
map.set('b', 2).set('f', 6).set(NaN, 'Number')
console.log(map)
console.log(map.get(NaN))
// map.clear() - метод позволяет очистить весь map
// map.has(42) - проверяет существование ключа
// map.delete('b') - возвращает результат успеха удаления ключа
// map.size - показывает количествo элементов внутри map
// также можно юзать вспомогательные методы 
console.log(map.keys())
console.log(map.entries())
console.log(map.values())

// Set - массив + особенности
// в конструктор необходимо передать набор значений любых типов данных
const set = new Set(
  [1, 1, 2, 3, 5, 8, 13, 13, 13, 8, 5]
)
// сет характерен тем, что в нём не содержится дубликатов.
console.log(set)
console.log(set.size)
// сет имеет методы для удобства взаимодействия с данными
console.log(set.add(21))
// set.clear()
set.delete(1)
console.log(set)
// также у сетов для обратной совместимости с мэпами присутствуют методы:
console.log(set.keys())
console.log(set.entries())
console.log(set.values())
// но они работают странно - не показывая ключи, только значения