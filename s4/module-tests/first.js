const state = require('./state')
//importam obiectul State

//setam 
const doSStuff = () =>{
    state.setValue('somekey','somevalue')
}

//exportam metoda
module.exports = {
    doSStuff
}