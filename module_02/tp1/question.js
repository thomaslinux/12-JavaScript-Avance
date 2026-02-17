const HTML_QUIZ = document.getElementById('quiz');
console.log(HTML_QUIZ);

export class Question {
    enonce;
    reponses;
    reponseCorrecte;

    constructor(enonce = "enonce", reponses = [], reponseCorrecte = 0) {
        this.enonce = enonce;
        this.reponses = reponses;
        this.reponseCorrecte = reponseCorrecte;
    }

    displayQuestion(index) {
        console.log("question.displayQuestion")
        const divQuestion = document.createElement("fieldset");
        divQuestion.innerHTML = `<legend>Question ${index}</legend>`;
        HTML_QUIZ.append(divQuestion);
        htmlCreateElement(this.enonce, "p", this.enonce, index, 0, divQuestion);
        for (const [indexReponse, reponse] of this.reponses.entries()) {
            htmlCreateElement(reponse, "input", reponse, index, indexReponse, divQuestion);
        }
    }
}

function htmlCreateElement(name, balise, text, index = 0, indexReponse = 0, appendTo = HTML_QUIZ) {
    name = name + index;
    if (document.getElementById(name)) {
        document.getElementById(name).remove();
    }
    const element = document.createElement(balise);
    element.id = name;
    if (balise === "input") {
        htmlCreateInput(element, name, balise, text, index, indexReponse, appendTo)
    } else {
        element.innerText = text;
        console.log(element);
        appendTo.append(element);
    }
}

function htmlCreateInput(element, name, balise, text, index, indexReponse, appendTo = HTML_QUIZ) {
    element.type = "radio"
    element.name = index
    element.value = indexReponse;
    const label = document.createElement("label")
    label.setAttribute("for", name);
    // label.id = name;
    label.innerText = text;
    appendTo.append(element);
    appendTo.append(label)
}