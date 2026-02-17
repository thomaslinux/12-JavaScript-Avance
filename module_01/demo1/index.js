// déclarations

const trouser = 'jean';
let size = 42;

let clothes = ['dress', 'short', 't-shirt','bob'];

console.group("Habits");
console.log(trouser);
console.log(size);
console.table(clothes);

console.log(typeof trouser);
console.log(typeof size);

console.groupEnd();

/////////////

// structures de code

for (let i = 0; i <clothes.length; i++) {
   console.log(clothes[i]);
}
console.log("-------");

for (const clothe of clothes) {
    console.log(clothe);
}
console.log("-------");

clothes.forEach(
    function(value, index) {
        console.log(`index : ${index} -> ${value}`);
        console.log(this);
    }
);
console.log("-------");

clothes.forEach(
    (value, index) => {
    console.log(`index : ${index} -> ${value}`);
    console.log(this);
    // le contexte d'exécution est perdu
    }
);
// => pas besoin d'accolades, mais qu'une seule ligne, qui est return par défaut (return undefined pour un console.log)
console.log("-------");

// functions

function getClothe(index) {
    return clothes[index];
}

// anonyme

const getClothe2 = function(index) {
    return clothes[index];
}

console.log(getClothe(3));