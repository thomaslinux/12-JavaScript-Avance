class Character {
    #name;
    species;
    _age;
    constructor(name, species = 'Human', ageCharacter = null) {
        this.#name = name;
        this._age = ageCharacter;
        this._species = species;
        this._ageCharacter = ageCharacter;
    }

    description() {
        return `${this.#name}, ${this.species}`;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

const chewie = new Character('Chewbacca', 'Wookie', 200);
const jarjar = new Character('Jar Jar')

console.log(chewie.name);
chewie.name="Yoda";
console.log(chewie.name);
// console.log(jarjar);

// Spread, stocker tous les arguments dans un tableau d'arguments
function test(...args) {
    for (const a of args) {
        console.log(a);
    }
}

test(12,13,45)
test("fgd")

test();
