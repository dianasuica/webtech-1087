const nothing = require('./nothing')
const SimpleConstructor = require('./simple-constructor')

nothing.doNothing()

const mySimpleConstructor = new SimpleConstructor('some name')
mySimpleConstructor.doStuff()

//chiar daca dam require de mai multe ori din acelasi fisier se importa o singura data
console.log("----")
const first = require('./first')
const second = require('./second')

first.doSStuff()
second.doSStuff()