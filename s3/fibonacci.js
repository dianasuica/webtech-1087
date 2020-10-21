let f = (something) =>{
    console.log(`${something}`);

}

f('buna');

let fib = (n)=>{
    
    switch(n){
        case 0:
        case 1: return 1
        default: return fib(n-1) +fib(n-2)
    }
        // if(n==0 || n==1)
        //  return 1
        // else
        //  return fib(n-1) +fib(n-2)      
    

}

console.log(fib(5));

// preia din consola argumentul node function.js 5 => pt fib(5)=8
if(process.argv.length < 3){
    console.log('usage: node2.js <fibonacci index>')
}else{
    let index = parseInt(process.argv[2])
    if(isNaN(index))
    {
        console.log('index should be a positive integer')
    }
    console.log(fib(index))
}