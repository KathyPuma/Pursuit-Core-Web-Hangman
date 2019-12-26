// User must play against computer --Complete
// words that the computer chooses must be random. --Complete
// users have a  limited number of guesses -Complete
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
  for (let i = 0; i < randomWord.length; i++) {
    hiddenWord.push("_")
  }
  return hiddenWord
}

const checkIfLetterExist = (letter, randomWord) => {
  return randomWord.includes(letter)
}

const replaceWithLetter = (randomWord, letter, hiddenWord) => {
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter) {
      hiddenWord[i] = letter
    }
  }
  return hiddenWord
}


const winner = (tries, hiddenWord, randomWord) => {
  if (tries === 0) {
    return "You Lose!"
  } else if (hiddenWord === randomWord) {
    return "You Win!"

  }
}



const beginGame = () => {
  let generatedRandomWord = getRandomWord(words)
  console.log(generatedRandomWord)
  let hiddenWord = setupHiddenWord(generatedRandomWord)
  let hiddenWordJoin = hiddenWord.join('')
  let allInput = []

  let tries = 6
  while (tries > 0 && !(hiddenWordJoin === generatedRandomWord)) {
    const letterInput = readlineSync.question("Type a letter: ")
    // let allInputJoin = allInput.join("")

    if (letterInput.length > 1) {
      console.log("only 1 letter")

    }else if(letterInput.length === 0){
      console.log("No blank input")

    } else {
      allInput.push(letterInput)
      console.log(`All of your guesses: ${allInput}`)
      if (checkIfLetterExist(letterInput, generatedRandomWord)) {
        console.log("letter exists")
        hiddenWord = replaceWithLetter(generatedRandomWord, letterInput, hiddenWord)
        console.log(hiddenWord)
      } else {
        console.log(`Wrong! You have ${tries - 1} tries left`)
        tries--
        console.log(tries)
      }
    }


  }



  let endOfGame = winner(tries, hiddenWordJoin, generatedRandomWord)
  console.log(endOfGame)
}


beginGame()