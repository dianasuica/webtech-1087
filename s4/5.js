function doS(a,b,c){
    for(let i=0;i<10000;i++){
        console.log(a+b+c+i)
    }
}

function getTimedFunction(f){

    //prototipul oricarei functii
    return function(...args){
        let before = Date.now()
        let result = f(...args)
        let after = Date.now()
        console.log(`execution took ${after-before} ms`)
        return result
    }
}

//doS(1,2,3)
const timedDoS = getTimedFunction(doS)
timedDoS(1,2,3)