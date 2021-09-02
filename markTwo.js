var readLineSync = require("readline-sync");
const chalk = require('chalk')
let score = 0;

console.log(chalk.bgCyan("Here Are Some Quiz About Our Great Game Kho-Kho"));
console.log("--------------------");

function game(question, answer) {
  var ques = readLineSync.question(question);
  console.log("--------------------");

  if(ques === answer) {
    console.log(chalk.bgGreen("Correct Answer 😉"));
    ++score;
  } else {
    console.log(chalk.bgRed("Wrong Answer 😢"));
    --score;
  }
  console.log("Your Current Score : ", score);
  console.log("--------------------");
}

game("Which country first originated Kho Kho game? ", "Maharastra");
game("How many players should be there in kho kho team totally? ", "12");
game("How many players are substitute in Kho Kho? ", "3");
game("When was Kho-Kho started? ", "1914");

console.log(chalk.bgGreen("Your Total Score : ", score));
console.log("--------------------");

console.log("Here Are Some High Scores");
console.log("Askok : 4");
console.log("Anil : 3");