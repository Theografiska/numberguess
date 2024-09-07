let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// task 1
const generateTarget = () => {
    return (Math.floor(Math.random() * 10));
};

console.log(generateTarget());

// task 2
const compareGuesses = (userGuess, cpuGuess, generateTarget) => {
    if (userGuess === cpuGuess) {
        return true; // human wins in case of a tie.
    } else if ((Math.abs(userGuess - generateTarget)) < (Math.abs(cpuGuess - generateTarget))) {
        return true;
    } else return false;
};

console.log(compareGuesses());

// task 3
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  };
};

// task 4
const advanceRound = () => {
  currentRoundNumber += 1;
};