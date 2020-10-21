// let robot = {
//     name: "Robotel",
//     move: function(){
//         console.log(`${this.name} is moving`)
//     }
// }

// robot.move();


class Robot{
    constructor(name){
        this.name = name;
    }

    move(){
        console.log(`${this.name} is moving`)
    }
}

const r0 = new Robot('ordinary robot')
r0.move();

class Weapon{
    constructor(description){
        this.description = description;
    }

    fire(){
        console.log(`fireeee ${this.description}`);
    }
}

class CombatRobot extends Robot{
    constructor(name){
        super(name)
        this.weapons = [];

    }

    addWeapon(w){
        this.weapons.push(w);
    }

    fire(){
        console.log('firing all weapons')
        for(const w of this.weapons){
            w.fire()
        }
    }

}

const cr=new CombatRobot('CR',[])
cr.move()
cr.fire()
const w1 = new Weapon('pew pew laser')
const w2 = new Weapon('boom boom bombe')
cr.addWeapon(w1)
cr.addWeapon(w2)
cr.fire();

Robot.prototype.fly = function(){
    console.log(`${this.name} is flying`)
}
cr.fly()
r0.fly()

let f0 = cr.fly

f0.apply(r0) //rulam codul de la cr, dar ii punem alta referinta de obiect pt a-l folosi

let f1 = f0.bind(r0) //definitiv

