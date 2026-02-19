class Chocolate implements Variety {

    public cacaoLvl : number
    public origin : string

    constructor(cacaoLvl : number, public color : string) {
        this.cacaoLvl = cacaoLvl
    }

    color2: { nuance: string; origin: string; };

    name: string;

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
    color2 : {
        nuance : string
        origin : string
    }
}

let crunch : Variety = {
    name : "Crunch",
    color2 : {
        nuance : 'Marron bleu clair',
        origin : 'Eurasien'
    }
}