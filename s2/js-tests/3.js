let b = true

console.log(!'')  // '' e null => false => !''=true

let s='12.4'
console.log(parseFloat(s))
console.log(parseInt(s))

console.log(parseInt('abc'))  //NaN = not a number

console.log(!NaN) // !NaN = true

console.log(!null) // !null = true

let a
console.log(a) //undefined
console.log(typeof a) //undefined

//console.log(d) //eroare pt ca nu exista aceasta cheie in memorie, a exista dar nu are valoare

console.log(!undefined) //true bcs undefined is false
console.log(!0) // true bcs 0 is false