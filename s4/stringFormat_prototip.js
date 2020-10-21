const formatString = (input, format) =>{
    let result = input;
    for(let i=0; i<format.length; i++){
        result = result.replace('{'+i+'}',format[i])
    }
    return result
}

console.log('{0} is a {1}',['andrei','toma'])
console.log(formatString('{0} is a {1}',['andrei','toma']))

//echivalent si acum face o functie prototip pt toate string-urile

String.prototype.format = function(format){
    let result = this;
    for(let i=0; i<format.length; i++){
        result = result.replace('{'+i+'}',format[i])
    }
    return result
}

console.log('{0} is a {1}'.format(['andrei','toma']))