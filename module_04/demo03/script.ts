class Chocolate {

    public cacaoLvl : number
    public origin : string

    constructor(cacaoLvl : number, public color : string) {
        this.cacaoLvl = cacaoLvl
    }

    display() {
        console.log(`${this.cacaoLvl}% , Couleur : ${this.color}, Origin : ${this.origin}`);
    }

}

let choco = new Chocolate(90, 'black')
choco.color = 'vert'
choco.origin = 'Pérou'
choco.display();

interface Variety {
    name : string
    color : {
        nuance : string
        origin : string
    }
}