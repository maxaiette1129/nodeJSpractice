const name = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-flavor')
require('./practicemodule')


console.log(data.person)
console.log(data.items)
sayHi('susan')
sayHi(name.john)
sayHi(name.max)

