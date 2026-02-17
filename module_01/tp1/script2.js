let guess = (dico[alea(0, dico.length)]);
let tableauLettres = [''];
let nbLettresFausses = 0;
let tableauLettresEntrees = [''];
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const HTML_GUESS = document.querySelector("#guess");
const HTML_H1 = document.querySelector("h1");
let FIN_DU_JEU = false;

const keydownHandler = (e) => {
    const lettre = (e.key).toUpperCase();
    rechercher_une_lettre(lettre);
}
document.addEventListener("keydown", keydownHandler);


reset();

function reset() {
    // console.log("reset");
    FIN_DU_JEU = false;
    HTML_H1.innerText = "Jeu De Devinette";
    guess = creer_mot_a_rechercher();
    tableauLettres = [''];
    tableauLettresEntrees = [''];
    nbLettresFausses = 0;
    initWord(guess);
    htmlCreerElement("zoneAlphabet","div");
    htmlCreerElement("compteur","div");
    htmlCreerElement("lettresFausses","div");
    htmlCreerElement("reset","button");

    const HTML_RESET = document.querySelector("#reset");
    HTML_RESET.addEventListener("click", () => {
        reset();
    });
    creer_boutons_alphabet();
} // Réinitialiser le jeu

function htmlCreerElement(nomElement,typeElement) {
    if (document.getElementById(nomElement)) {
        document.getElementById(nomElement).remove();
    }
    const element = document.createElement(typeElement);
    element.id = nomElement;
    if (typeElement !== "div") element.innerText = nomElement;
    document.body.append(element);
}

function creer_boutons_alphabet() {
    const HTML_ZONE_ALPHABET = document.getElementById("zoneAlphabet");
    for (let a of alphabet) {
        const button = document.createElement("button");
        button.id = a;
        button.innerText = a;
        const clickHandler = () => {
            rechercher_une_lettre(a);
        };
        button.addEventListener("click", clickHandler);
        HTML_ZONE_ALPHABET.append(button);
    }
}

function initWord(guess) {
    HTML_GUESS.innerText = "";
    HTML_GUESS.id = "guess";
    for (let i = 0; i < guess.length; i++) {
        tableauLettres[i] = guess[i];
        // div.innerHTML += '<span id="${i}">_ </span>';
        const span = document.createElement("span");
        span.id = "span" + i;
        guess[i] != "-" ? span.textContent = "_ " : span.textContent = "- ";
        HTML_GUESS.append(span);
    }
} // Créer le tableau de lettres de l'alphabet


function creer_mot_a_rechercher() {
    return (dico[alea(0, dico.length)]);
} // Creation du mot à rechercher en remplacant ses lettres par des "_"

function rechercher_une_lettre(lettre) {
//     return tableauLettres.indexOf(lettre) ? tableauLettres.indexOf(lettre) : tableauLettresFausses.push(lettre);
    if (FIN_DU_JEU === false) {
        const idButton = "button#" + lettre;
        const currentButton = document.querySelector(idButton);
        if (!tableauLettresEntrees.includes(lettre)) {
            tableauLettresEntrees.push(lettre);
            if (tableauLettres.includes(lettre)) {
                for (let i = 0; i < tableauLettres.length; i++) {
                    if (tableauLettres[i] == lettre) {
                        reveler_une_lettre(lettre, i);
                    }
                }
                guess.replaceAll(lettre, "");
                currentButton.style.color = "blue";
            } else {
                nbLettresFausses++;
                const compteur = document.getElementById("compteur");
                compteur.innerText = nbLettresFausses + " lettres fausses";
                currentButton.style.color = "red";
            }
            currentButton.disabled; // idée de Mathilde
        }
    }
    verif_victoire();

} // Recherche de la lettre cliquée dans le mot à rechercher

function reveler_une_lettre(lettre, position) {
    const id = "#span" + position;
    const span = document.querySelector(id);
    if (span) {
        span.innerText = lettre + " ";
    }
} // Si la lettre est présente dans le mot recherché elle est affichée


function verif_victoire() {
    if (guess.length < 1) {
        desactiveJeu("Vous avez gagné");
    }
    if (nbLettresFausses > NB_TENTATIVES) {
        desactiveJeu("Vous avez perdu !");
        reveler_mot();
    }
} // Vérifier si le jeu est gagné

function desactiveJeu(message) {
    // document.removeEventListener("keydown", keydownHandler);
    HTML_H1.innerText = message;
    FIN_DU_JEU = true;
}

function reveler_mot() {
    for (let i = 0; i < tableauLettres.length; i++) {
        const id = "#span" + i;
        document.querySelector(id).innerText = tableauLettres[i];
    }
} // Afficher le mot recherché


/**
 * @param {Number} MIN valeur minimum du nombre aleatoire (inclue)
 * @param {Number} MAX valeur maximum du nombre aleatoire (excluse)
 * @returns {Number} un entier aleatoire entre une valeur MIN (inclue) et une valeur MAX (exclue)
 */
function alea(MIN, MAX) {
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
};