class State{
    constructor(){
        this.state ={} //obiect
    }

    getValue(key){
        return this.state[key]
    }

    setValue(key,value){
        this.state[key] = value;
    }
}

//nu importam constructorul
const state = new State()

module.exports = state