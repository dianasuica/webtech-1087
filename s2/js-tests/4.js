let a = [1,2,3,4] //array
console.log(a)

let o ={           
    name: 'someone',
    age: 44
}               //obiect
console.log(o)  //perechi cheie-valoare

console.log(a[3])
a.push(8)       //adauga la final 8 , functioneaza array-ul ca o stivaa
console.log(a)
a.unshift('a')  //adauga la inceput litera a
console.log(a)
console.log(a.pop())  //scoate ultimul elem
console.log(a.shift()) //scoate primul elem
console.log(a.indexOf(3))  //indexul la care se afla 3
console.log(a.indexOf('bear')) //returneaza -1 pt ca nu gaseste elem

console.log(a.slice(1,3)) //retruneaza elem intre indecsi, inschis la stg si deschis la dr
console.log(a.slice(0,a.length))

let b = [1,2,3,4,5,6,7,8]
b.splice(1,3)   //taie elementele dintre acei indecsi
console.log(b)
b.splice(1,1,'a','b','c') //de la pozitia 1 inlocuieste elementele cu a,b,c
console.log(b)  
