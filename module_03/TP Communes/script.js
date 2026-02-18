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
        p.innerText = `Nom : ${communes.nom}, Population : ${communes.population}, CP : ${communes.code}`
        const div = document.createElement("div");
        div.id = communes.nom;

        div.append(p);
        document.body.append(div);
    }
}
// displayAllCommunes()

async function callApi(url) {
    let httpResponse = await fetch(url);

    if (httpResponse.status === 200 && httpResponse.ok) {
        return httpResponse.json();
    }
}

// callApi("https://geo.api.gouv.fr/communes")

// callApi("https://geo.api.gouv.fr/departements")

// callApi(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes`)

async function getCommunesOfDepartement(codeDepartement) {
    let result = [];
    for(const commune of listes_communes) {
        if (commune.codeDepartement == codeDepartement) {
            result.push(commune);
        }
    }
    return result;
}

async function displayDepartements() {
    let data = await callApi("https://geo.api.gouv.fr/departements");
    listes_communes = await callApi("https://geo.api.gouv.fr/communes");
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
    // console.log(codeDepartement);
    let data = await getCommunesOfDepartement(codeDepartement);
    // console.log(data)
    HTML_commune.innerHTML = HTML_COMMUNE_EMPTY;
    for(const commune of data) {
        const option = document.createElement("option");
        option.innerText= commune.nom;
        option.value=commune.code;
        HTML_commune.append(option);
    }
}

// affiche les infos de la commune, l'élement du table qui contient pas le code département
async function displayInfoCommune() {
    for (const commune of listes_communes) {
        if (commune.code === HTML_commune.value) {
            const div = document.createElement("div");
            div.id = commune.code;
            // https://stackoverflow.com/questions/14379274/how-to-iterate-over-a-javascript-object
            for (let key in commune) {
                // console.log(key, commune[key]);
                const label = document.createElement("label")
                // label.setAttribute("for",key);
                label.innerText = key + " : ";
                const p = document.createElement("p")
                p.innerText = commune[key];
                div.append(label);
                div.append(p);
            }
            // div.innerText = `Nom : ${commune.nom}, Population : ${commune.population}, CP : ${commune.code}`
            HTML_info_communes.append(div)
        }
    }

}

function init() {
    HTML_commune.addEventListener("change", displayInfoCommune);
    displayDepartements();
    HTML_departement.addEventListener("change", displayCommunesOfDepartement);
}

window.onload = init;