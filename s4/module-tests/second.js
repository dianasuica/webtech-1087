const state = require('./state')
//importam obiectul

const doSStuff = () =>{
    const value = state.getValue('somekey')
    console.log(`value is ${value}`)
}

//exportam metoda
module.exports = {
    doSStuff
}