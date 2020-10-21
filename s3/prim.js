const prim = (n) =>
{
    if( n ==1 || n==2)
    {
        return true
    }else{

        for(let i=2;i<=Math.sqrt(n);i++)
        {
            if(n%i==0)
            {
                return false;
            }
        }
    }

    return true;

}

console.log(prim(6))
console.log(prim(16))
console.log(prim(33))
console.log(prim(35))


