const HTML_departement = document.getElementById('departement');
const HTML_commune = document.getElementById('commune');
const HTML_COMMUNE_EMPTY = HTML_commune.innerHTML;
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

    const departements = await callApi(`${BASE_URL}/departements`);

    departements.forEach(function (val) {
        const option = document.createElement('option');
        option.innerText = `${val.code} - ${val.nom}`;
        option.value = val.code;

        HTML_departement.append(option);
    });
}

function getCitiesByDep() {
    const codeDep = HTML_departement.value;
    console.log(codeDep);
}

function init() {


    getDepartements();

    HTML_departement.addEventListener('change', getCitiesByDep);

}

window.onload = init();