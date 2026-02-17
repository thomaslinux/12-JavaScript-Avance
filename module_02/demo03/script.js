function Character(name, species = 'Gundan', age = null) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.description = function() {
        return `${this.name}, ${this.species}`;
    }
}

const chewie = new Character('Chewbacca', 'Wookie', 200);
const jarjar = new Character('Jar Jar')

chewie.weapon = "Sabre laser";
Character.prototype.weapon = "Arbalète laser"

console.log(chewie);
console.log(chewie.weapon);
console.log(jarjar);

