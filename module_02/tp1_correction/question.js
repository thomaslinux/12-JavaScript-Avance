export class Question {
    label;
    answers;
    correctAnswer;

    constructor(label, answers, correctAnswer) {
        this.label = label;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    display() {
        const h3 = document.createElement('h3');
        h3.innerText = this.label;
        
        const divAnswers = document.createElement('div');

        for (const [index, answer] of this.answers.entries()) {
            const input = document.createElement('input')
            input.type = 'radio'
            input.value = index;
            input.name = 'michel';
            input.id = index;

            const label = document.createElement('label');
            label.innerText = answer;
            label.setAttribute("for", index);

            divAnswers.append(input);
            divAnswers.append(label);
        }

        const divContainer = document.createElement('div');
        divContainer.append(h3);
        divContainer.append(divAnswers);

        return divContainer;
    }
}