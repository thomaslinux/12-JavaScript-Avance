let indexIncr = 0;

export class Quiz {
    questions;
    score;
    index;

    constructor(questions = [], score = 0, index = 0) {
        this.questions = questions;
        this.score = score;
        this.index = index;
    }

    addQuestion(question) {
        this.questions.push(question);
        this.index = indexIncr++;
    }

    displayQuestion(question) {
        let indexQuestion = 0;
        for (const [index, value] of this.questions.entries()) {
            if (question === value) indexQuestion = index;
        }
        question.displayQuestion(indexQuestion);
    }

    displayQuestions() {
        for (const [index, question] of this.questions.entries()) {
            console.log(question);
            question.displayQuestion(index);
        }
    }

    // Collecter la réponse de l’utilisateur, vérifier si elle est correcte et mettre à
    // jour le score
    collectAnswer() {
        const score = document.querySelector("#score");
        score.innerText = 0;
        for (const [index, question] of this.questions.entries()) {
            const selector = `input[name='${index}'][value='${question.reponseCorrecte}']`;
            (document.querySelector(selector + ":checked") !== null) ?
                score.innerText++ : console.log("reponse fausse");
        }
    }

    // Afficher le score de l’utilisateur dans le DOM
    displayResultat() {
    }
}