var readlineSync = require('readline-sync');
var userName = readlineSync.question("Please enter your name to proceed ")
console.log("Welcome " + userName + " Let's Play" + "\n")


var questions = [{
  question: "Q1 - Who was Joey's imaginary childhood friend? ",
  answer: "maurice"
},

{
  question: "Q2 - What was the profession of Joey's imaginary friend? ",
  answer: "space cowboy"
},

{
  question: "Q3 - What was Monica's nickname when she was a field hockey goalie? ",
  answer: "big fat goalie"
},

{
  question: "Q4 - What does Rachel guess Chandler's job is? ",
  answer: "a transponster"
},

{
  question: "Q5 - What is Richard's daughter's name? ",
  answer: "michelle"
},

{
  question: "Q6 - Who is Joey's agent? ",
  answer: "estelle"
},


{
  question: "Q7 - Who mistakingly threw a woman's wooden leg into a fire? ",
  answer: "joey"
},

{
  question: "Q8 - What was the name of Chandler and Ross' college band? ",
  answer: "way no way"
},

{
  question: "Q9 - Monica categorizes her towels into how many categories? ",
  answer: "11"
},

{
  question: "Q10 - What was the name of Ross' pet monkey? ",
  answer: "marcel"
},
]

var score = 0
function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("you are right !")
    score++
  }
  else {
    console.log(" sorry! You are wrong ")
  }
  console.log("score is ", score)
}

for (let i = 0; i < questions.length; i++) {
  var presentQuestion = questions[i];
  play(presentQuestion.question, presentQuestion.answer);
}
console.log("\nThe quiz ends here.Thanks for playing.");
console.log("--------------------------------");
console.log(userName +"  Your final score is", score)

//highest score message
if (score===10){
console.log("Congrats! You are a real die hard fan of FRIENDS" )
}
//highscores Data
var highScores = [{
  name: "Chandler",
  score:10
},
 {name : "Ross",
  score:9}
,
 {name : "Monica",
  score: 8
 }
]
for (var i=0; i<highScores.length; i++){
  console.log(highScores[i])

}
  console.log("-------------------------------")
  console.log("\nSend me your scores screenshot If you beat the highscores")