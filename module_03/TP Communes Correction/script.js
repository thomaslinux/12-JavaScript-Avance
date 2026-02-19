const HTML_DEPARTEMENT = document.getElementById('departement');
const HTML_COMMUNE = document.getElementById('commune');
const HTML_COMMUNE_EMPTY = HTML_COMMUNE.innerHTML;
const HTML_info_communes = document.getElementById("info_communes");
let listes_communes = [];

const BASE_URL = "https://geo.api.gouv.fr"

async function callApi(url) {
    let response = await fetch(url);

    if (response.ok) {
        return response.json();
    }
}

// callApi("https://geo.api.gouv.fr/communes")

async function getDepartements() {

    const departements = await callApi(`${BASE_URL}/departements?fields=nom,code`);

    departements.forEach(function (val) {
        const option = document.createElement('option');
        option.innerText = `${val.code} - ${val.nom}`;
        option.value = val.code;

        HTML_DEPARTEMENT.append(option);
    });
}

async function getCitiesByDep() {

    const cities = await callApi(`${BASE_URL}/departements/${this.value}/communes?fields=nom,code`);

    HTML_COMMUNE.innerHTML = HTML_COMMUNE_EMPTY;

    cities.forEach(function(val) {
        const option = document.createElement('option');
        option.innerText = val.nom;
        option.value = val.code;
        HTML_COMMUNE.append(option);
    });
}

async function getCityByCode() {
    const city = await callApi(`${BASE_URL}/communes/${this.value}?fields=nom,population,codesPostaux`);

    console.log(city);

    let p = document.createElement('p');
    p.innerText = `Nom : ${city.nom}, Population : ${city.population}, CP : ${city.codesPostaux.join('-')}`

    document.body.append(p);
}

    function init() {
    getDepartements();
    HTML_DEPARTEMENT.addEventListener('change', getCitiesByDep);
    HTML_COMMUNE.addEventListener('change', getCityByCode);
}

window.onload = init;