export class Quiz {
    constructor() {
        this.questions = [];
        this.score = 0;
        this.index = 0;
    }

    addQuestion(question) {
        this.questions.push(question);
    }

    displayQuestion(question) {
        document.getElementById('quiz').innerHTML = ''
        document.getElementById('quiz').append(question.display());
    }

    displayResult() {
        document.getElementById('quiz').innerHTML = 
            `<p>Score : ${this.score}/${this.questions.length}</p>`

    }

    collectAnswer() {

        // récupère la valeur de l'input radio sélectionné
        let answer = document.querySelector("input[name='michel']:checked");

        if (answer) {
            if(answer.value == this.questions[this.index].correctAnswer) {
                this.score++;
            }
            this.nextQuestion();
        }
    }

    nextQuestion() {
        this.index++;
        if (this.index < this.questions.length) {
            this.displayQuestion(this.questions[this.index]);
        } else {
            this.displayResult();
        }
    }
}
