// идея заключается в том, что появился очень удобный синтаксис -> import {} from './PATH'
// для объединения и взаимодействия различных файлов
import Logger, {COLOR, compute} from './module'
compute(1, 2)
console.log(COLOR)
Logger.log()
// есть также следующий синтаксис import
// мы можем сказать импортировать всё и 
// в какую переменную \ объект это положить
import * as Module from './module'
Module.default.log()