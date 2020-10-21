//sa nu calculez val decat daca le calculeaza pt prima data
// => trebuie sa aiba stare
// facem functie in functie
//memoram rezultatele si le accesam ulterior din cache

const genCheckPrime = () =>{
    const cache = []
    const prim = (n) =>
    {
        if(cache.indexOf(n) !== -1)  //daca a fost deja verificat inainte si a fost gasit ca fiind prim
        {
            console.log('found in cache')
            return true
        }else{  
        if(n===1 || n===2)
        {
            return true
        }else{
    
            for(let i=2;i<=Math.sqrt(n);i++)
            {
                if(n%i===0)
                {
                    return false;
                }
            }
        }
        cache.push(n)
    
        return true;
        }
    }

    return prim
}

const checkPrime = genCheckPrime()

console.log(checkPrime(11))
console.log(checkPrime(7))
console.log(checkPrime(6))
console.log(checkPrime(11))

