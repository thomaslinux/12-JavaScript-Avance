let clothes =['dress','short','t-shirt','bob'];

const selectClothe = document.getElementById('clothes')

for(const clothe of clothes) {

    // Création d'un élément de type option
    const option = document.createElement('option');
    option.value = clothe;
    // option.innerText = clothe.toUpperCase();
    option.text = clothe.toUpperCase();

    // ajout dans le dom comme enfant du select
    selectClothe.append(option);
}

// quand je sélectionne une option, elle s'affiche dans une balise p dans le DOM

selectClothe.addEventListener('change', function() {
    const p = document.createElement('p');
    p.innerText = this.value; // référence à l'objet sur lequel je travaille

    console.log(this);
    document.body.append(p);
});