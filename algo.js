const playerGuess = 3;
const correctAnswer = 6;

/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
*/

let message = playerGuess == correctAnswer ? "Correct!" : "Wrong!";

//switch statements
/**
 * Price List
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
 */

// For example: "You selected Salad. That will be $4"

function selectItem(item) {
  let price = 0;
  /*
Challenge:
1.  Add the remaining price list items as cases.
*/
  switch (item) {
    case "coffee":
      price = 2;
      break;
    case "sandwiches":
      price = 5;
      break;
    case "salad":
      price = 4;
      break;
    case "lemon cake":
      price = 3;
      break;
  }
  return `You selected ${item}. That will be $${price}`;
}

console.log(selectItem("biscuits"));

const dreamHoliday = {
    destination: 'Japan',
    activity: 'Basketball and hiking',
    accommodation: 'Village House',
    companion: 'My friend'
}

const {destination,activity,accommodation,companion} = dreamHoliday
console.log(`I would love to go to ${destination}, for ${activity}.I will live at ${accommodation} with ${companion}`)

console.log('What is the capital of Peru?')

setTimeout(function(){
    console.log('Lima!')
}, 3000)

console.log('Ready for next question?')


//settimeout
function logAnswer(name,points) {
    console.log(`The answer is ${name} of course! If you got that right, giver yourself ${points} points .`)
}

console.log('What is the capital of Peru?')
setTimeout(logAnswer,3000,Lima,3)  //here Lima and 3 are the arguments that are being passed to the function logAnswer


