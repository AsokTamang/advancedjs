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


function startCountdown() {
    let secondsRemaining = 3



    const shutdownTimer = setInterval(function() {
        if (secondsRemaining > 0) {
            console.log(`Your device will shut down in ${secondsRemaining} seconds.`)
            secondsRemaining -= 1
        }
        else {
            console.log('Your device is shutting down.')
            clearInterval(shutdownTimer)   //clearinterval is used to remove the setinterval function

        }

    }, 1000)

}
startCountdown()


characters.forEach(function(character){
    console.log(character.powers)
    character.powers.forEach((power)=>console.log(power))})

    // const emojis = ['🐥','🐯','🐼']
// console.log(emojis.includes('🐴'))

const addItemBtn = document.getElementById('add-item-btn')
const itemInput = document.getElementById('item-input')
const list = document.getElementById('list')

const shoppingList = []
    
addItemBtn.addEventListener('click', function(){
/*
Challenge:
1. Add an if else to the event listener's function.
2. Only add an item to the shoppingList array if it 
   is not already in the shoppingList array.
3. If an item is a duplicate, clear the input field
   and log out "no duplicates".
*/      if (shoppingList.includes(itemInput.value)){
    console.log('No duplicates')
    
    
}
else{
    shoppingList.push(itemInput.value)
        render()        
        
}
itemInput.value = ''

         
})

function render(){    
    let html = ''
    for (let item of shoppingList){
        html+= `<li class="list-item">${item}</li>`
    }
    list.innerHTML = html
}

render()

