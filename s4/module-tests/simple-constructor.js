class SimpleConstructor{
    constructor(name){
        this.name=name
    }

    doStuff(){
        console.log(`${this.name} is doing stuff`)
    }
}

module.exports = SimpleConstructor //exporta un obiect deci nu ne trebuie {}