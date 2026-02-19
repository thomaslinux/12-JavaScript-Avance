class Chocolate {
    public cacaoLvl : number
    public origin : string

    constructor(cacaoLvl : number, public color : string) {
        this.cacaoLvl = cacaoLvl
    }

    display() {

    }

}

let choco = new Chocolate(90, 'black')