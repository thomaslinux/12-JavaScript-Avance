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


console.log(chewie.name);
chewie.age = 150;
console.log(chewie);
console.log(chewie.description())

chewie.weapon = 'Arbalète lazer';
console.log(chewie);
console.log(jarjar);

