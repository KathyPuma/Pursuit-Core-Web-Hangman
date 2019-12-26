// User must play against computer 
// words that the computer chooses must be random.
// users have a  limited number of guesses
// After each guess, the computer should print out the current state of the word you are guessing. (ex. A _ _ L E, for apple)
// After each guess the computer should print out how many guesses you have remaining.
// The computer should tell the user if she wins, show her how many guesses it took and end the current game
// The user should see the correct answer if she loses


var readlineSync = require('readline-sync');

let words= ["hello", "happy"]


const getRandomWord = (arr) =>{
  let random = arr[Math.floor(Math.random()*arr.length)]
  return random 
}


const beginGame = () =>{
  let generatedWord = getRandomWord(words)
  console.log(generatedWord)
}

beginGame()