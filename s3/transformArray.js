const sampleArray = [1,2,3,4,5,6,7]

const sampleTransformation = (x) => x*2

const map = (a, t) => {

    let result =[] //facem array nou
    for( const element of a)
    {
        result.push(t(element))
    }
    return result
}

console.log(map(sampleArray,sampleTransformation)) //array modificat
console.log(sampleArray)  //nemodificat

console.log(map(['cat','bear','dog'],(x)=>x.length))