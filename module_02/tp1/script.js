import {Question} from './question.js';
import {Quiz} from './quiz.js';
//
let quiz = new Quiz()
let q1 = new Question("ca va ?", ['oui', 'non', 'je ne sais pas'], 2)
let q2 = new Question("Pain au chocolat ou chocolatine ?", ['Pain au chocolat', 'chocolatine', 'je ne sais pas'], 0)

// console.log(q1)
// console.log("hello")
// console.log(q1.reponses)
quiz.addQuestion(q1)
quiz.addQuestion(q2)
// quiz.displayQuestion(q1)
// quiz.displayQuestion(q2)
quiz.displayQuestions()

document.getElementById('submit').addEventListener('click', function () {
    quiz.collectAnswer();
})


// function displayReponse() {
//
// }
//
// function displayResultat() {
//
// }

