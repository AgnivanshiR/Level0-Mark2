var readlineSync = require('readline-sync');
var score = 0;


var questions = [{
  question: 'Who is the Prime Minister of India? ',
  answer: 'Narendra Modi'
}, {
  question: 'Who is the President of India? ',
  answer: 'Droupadi Murmu'
}, {
  question: 'which is the least populated state in india? ',
  answer: 'Sikkim'
}, {
  question: 'Which is the smallest state in India? ',
  answer: 'Goa'
}, {
  question: 'Which is the largest state in India? ',
  answer: 'Rajasthan'
}]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    score = score + 1
    console.log(`You are right, You replied '${answer}'. your score is ${score}`);
  } else {
    score = score - 1
    console.log(`You are wrong, The correct answer is '${answer}'. your score is ${score}`);
  }
}

function game() {
  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer)
  }
}
game()