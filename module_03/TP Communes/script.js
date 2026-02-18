const HTML_departement = document.getElementById('departement');
const HTML_commune = document.getElementById('commune');
const HTML_COMMUNE_EMPTY = HTML_commune.innerHTML;

async function getAllCommunes() {
    let httpResponse = await fetch("https://geo.api.gouv.fr/communes", {method: 'GET'})

    if(httpResponse.status === 200 && httpResponse.ok) {
        return httpResponse.json();
    } else {
        // gestion des erreurs
    }
}

async function displayAllCommunes() {
    let data = await getAllCommunes();
    console.log(data);
    for(const communes of data) {
        const p = document.createElement("p");
        p.innerText = communes.nom;
        const div = document.createElement("div");
        div.id = communes.nom;

        div.append(p);
        document.body.append(div);
    }

}
// displayAllCommunes();

async function getDepartements() {
    let httpResponse = await fetch("https://geo.api.gouv.fr/departements")
    if(httpResponse.status === 200 && httpResponse.ok) {
        return httpResponse.json();
    }
}

async function displayDepartements() {
    let data = await getDepartements();
    console.log(data);
    for(const departement of data) {
        const option = document.createElement("option");
        option.innerText=departement.code + "-" + departement.nom;
        option.value=departement.code;
        HTML_departement.append(option);
    }
    HTML_departement.value = "empty";
}

displayDepartements();

HTML_departement.addEventListener("change", displayCommunesOfDepartement)

async function displayCommunesOfDepartement() {
    let codeDepartement = document.querySelector("#departement").value;
    console.log(codeDepartement);
    let data = await getCommunesOfDepartement(codeDepartement);
    HTML_commune.innerHTML = HTML_COMMUNE_EMPTY;
    for(const commune of data) {
        const option = document.createElement("option");
        option.innerText= commune.nom;
        option.value=commune.code;
        HTML_commune.append(option);
    }

}

async function getCommunesOfDepartement(codeDepartement) {
    const lien = `https://geo.api.gouv.fr/departements/${codeDepartement}/communes`
    let httpResponse = await fetch(lien);

    if (httpResponse.status === 200 && httpResponse.ok) {
        return httpResponse.json();
    }
}


    // .then((httpResponse) => httpResponse.json())
    // .then((data) => {
    //     console.log(data);
    //
    //     characters = data;
    //     console.log(characters);
    //
    //
    // }
    // )

// console.log(characters);