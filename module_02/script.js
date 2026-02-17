const chewie = {
    name: 'Chewbacca',
        species: 'Wookie',
        age: 200,
        description : function() {
        return `${this.name}, ami de Han Solo !`;
    }
}

console.log(chewie.name);
chewie.age = 150;
console.log(chewie);
console.log(chewie.description())

chewie.weapon = 'Arbalète lazer';
console.log(chewie);

