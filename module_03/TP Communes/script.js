const HTML_departement = document.getElementById('departement');
const HTML_commune = document.getElementById('commune');
const HTML_COMMUNE_EMPTY = HTML_commune.innerHTML;
const HTML_info_communes = document.getElementById("info_communes");
let listes_communes = [];

async function displayAllCommunes() {
    let data = await callApi("https://geo.api.gouv.fr/communes");
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

async function callApi(url) {
    let httpResponse = await fetch(url);

    if (httpResponse.status === 200 && httpResponse.ok) {
        return httpResponse.json();
    }
}

// callApi("https://geo.api.gouv.fr/communes")

// callApi("https://geo.api.gouv.fr/departements")

// callApi(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes`)


async function displayDepartements() {
    let data = await callApi("https://geo.api.gouv.fr/departements");
    console.log(data);
    for(const departement of data) {
        const option = document.createElement("option");
        option.innerText=departement.code + "-" + departement.nom;
        option.value=departement.code;
        HTML_departement.append(option);
    }
    HTML_departement.value = "empty";
}

async function displayCommunesOfDepartement() {
    let codeDepartement = document.querySelector("#departement").value;
    console.log(codeDepartement);
    let data = await callApi(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes`);
    HTML_commune.innerHTML = HTML_COMMUNE_EMPTY;
    for(const commune of data) {
        const option = document.createElement("option");
        option.innerText= commune.nom;
        option.value=commune.code;
        HTML_commune.append(option);
    }
    listes_communes = data;
}


// affiche les infos de la commune, l'élement du table qui contient pas le code département
async function displayInfoCommune() {
    // console.log(HTML_commune.value)
    for (const commune of listes_communes) {
        if (commune.code === HTML_commune.value) {
            const p = document.createElement("p");
            p.innerText = `Nom : ${commune.nom}, Population : ${commune.population}, CP : ${commune.code}`
            HTML_info_communes.append(p)
        }
    }

}

function init() {
    HTML_commune.addEventListener("change", displayInfoCommune);
    displayDepartements();
    HTML_departement.addEventListener("change", displayCommunesOfDepartement);
}

window.onload = init;

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