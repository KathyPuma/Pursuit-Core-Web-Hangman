// User must play against computer 
// words that the computer chooses must be random.
// users have a  limited number of guesses
// After each guess, the computer should print out the current state of the word you are guessing. (ex. A _ _ L E, for apple)
// After each guess the computer should print out how many guesses you have remaining.
// The computer should tell the user if she wins, show her how many guesses it took and end the current game
// The user should see the correct answer if she loses


var readlineSync = require('readline-sync');

let words = ["hello", "happy"]


const getRandomWord = (arr) => {
  let random = arr[Math.floor(Math.random() * arr.length)]
  return random
}

const setupHiddenWord = (randomWord) => {
  let hiddenWord = []
  console.log(randomWord.length)
  for (let i = 0; i < randomWord.length; i++) {
    hiddenWord.push("_")
  }
  return hiddenWord
}

const checkIfLetterExist = (letter, randomWord) => {
  return randomWord.includes(letter)
}




const beginGame = () => {
  let generatedRandomWord = getRandomWord(words)
  console.log(generatedRandomWord)
  let blank = setupHiddenWord(generatedRandomWord)
  console.log(blank)
  const letterInput = readlineSync.question("Type a letter: ")
  console.log(letterInput)

  let tries = 6

  if (checkIfLetterExist(letterInput, generatedRandomWord)) {
    console.log("letter exists")


  } else {
    console.log("wrong")
    tries--
    console.log(tries)
  }





}
beginGame()