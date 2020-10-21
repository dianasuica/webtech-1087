String.prototype.format = function(obiect){
    let result = this;
    for(let prop in obiect)  //luam proprietatile obiectului
    {
        result = result.replace('{'+prop+'}',obiect[prop])
    }
    return result
}

console.log('{name} is a {role}'.format({name:"andrei",role:"teacher"}))