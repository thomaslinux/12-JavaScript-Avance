import {dico} from './dico.js';
let randomWord = getRandomWord();
console.log(randomWord);
let nbAttempt = 5;

function generateAlphabet() {
    for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
        // création des caractères
        let letter = String.fromCharCode(i);

        // Création du bouton
        const button = document.createElement("button");
        button.innerText = letter;

        // ajout du click sur le button
        button.addEventListener('click', checkLetter);

        // ajout dans le dom
        document.getElementById("alphabet").append(button);
    }
}

function displayRandomWord() {
   document.getElementById("wordToFind").innerText = randomWord.replace(/\w/gi,'_');
    // \w les mots gi pour case incensitive pour matcher tous les mots
}

function checkLetter() {
    const letter = (this.innerText);

    const hiddenWord = document.getElementById("wordToFind").innerText.split('');

    if(randomWord.includes(letter)) {
        for (const [index, char] of randomWord.split('').entries()) {
            if (char === letter) {
                hiddenWord[index] = letter;
            } else {
                console.log(char === letter);
            }
        }
        document.getElementById("wordToFind").innerText = hiddenWord.join('');
    } else {
        document.getElementById('nbAttempt').innerText = --nbAttempt;
    }
    checkWin();
}

function checkWin() {
    if (!document.getElementById('wordToFind').innerText.includes('_') && nbAttempt > 0) {
        alert("Félicitations !");
    }
    if (nbAttempt <= 0) {
        alert("Vérifie encore !")
    }
}

window.onload = function() {
    generateAlphabet();
    displayRandomWord();
    document.getElementById('reset').addEventListener('click', function() {
       window.location.reload();
    });
} // TODO reset sans rechargement de la page

function getRandomWord() {
    const index = Math.round(Math.random() * dico.length);
    return dico[index];
}
