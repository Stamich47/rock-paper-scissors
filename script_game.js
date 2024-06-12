const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const container = document.getElementById('container');
const buttons = document.getElementById('buttons');

function getComputerChoice() {
  let cpu = Math.floor(Math.random() * 3);
  if (cpu > 1) {
    cpu = 'Rock';
  } else if (cpu < 1) {
    cpu = 'Paper';
  } else {
    cpu = 'Scissors';
  }
  return cpu;
}

function gameResults(e) {
  const cpuChoice = getComputerChoice();
  const playUpperCase =
    e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1);
  if (playUpperCase === cpuChoice) {
    console.log(
      `Player has ${playUpperCase}. Opponent has ${cpuChoice}. It's a tie!!`
    );
  } else if (
    (playUpperCase === 'Rock' && cpuChoice === 'Scissors') ||
    (playUpperCase === 'Scissors' && cpuChoice === 'Paper') ||
    (playUpperCase === 'Paper' && cpuChoice === 'Rock')
  ) {
    console.log(
      `Player has ${playUpperCase}. Opponent has ${cpuChoice}. Player Wins!`
    );
  } else {
    console.log(
      `Player has ${playUpperCase}. Opponent has ${cpuChoice}. Opponent Wins :(`
    );
  }
}

buttons.addEventListener('click', gameResults);

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  let computerSelectionLow = computerSelection.toLowerCase();

  playerSelection = prompt(
    'Rock, Paper or Scissors?',
    'Please enter your choice.'
  );
  if (playerSelection === null || playerSelection === '') {
    alert('Game cancelled');
    return;
  }

  playerSelection = playerSelection.toLowerCase();
  if (
    playerSelection === 'rock' ||
    playerSelection === 'paper' ||
    playerSelection === 'scissors'
  ) {
  } else {
    alert('Incorrect Entry. Please type only "Rock", "Paper" or "Scissors".');
    playRound();
  }

  if (computerSelectionLow === 'scissors' && playerSelection === 'rock') {
    console.loplayGame();
    g('Player chooses Rock, Computer chooses Scissors');
    console.log('Player Wins!');
  } else if (computerSelectionLow === 'paper' && playerSelection === 'rock') {
    console.log('Player chooses Rock, Computer chooses Paper');
    console.log('Player Loses!');
  } else if (computerSelectionLow === 'rock' && playerSelection === 'paper') {
    console.log('Player chooses Paper, Computer chooses Rock');
    console.log('Player Wins!');
  } else if (
    computerSelectionLow === 'scissors' &&
    playerSelection === 'paper'
  ) {
    console.log('Player chooses Paper, Computer chooses Scissors');
    console.log('Player Loses!');
  } else if (
    computerSelectionLow === 'paper' &&
    playerSelection === 'scissors'
  ) {
    console.log('Player chooses Scissors, Computer chooses Paper');
    console.log('Player Wins!');
  } else if (
    computerSelectionLow === 'rock' &&
    playerSelection === 'scissors'
  ) {
    console.log('Player chooses Scissors, Computer chooses Rock');
    console.log('Player Loses!');
  } else if (computerSelectionLow === playerSelection) {
    console.log(`Both players chose ${computerSelection}!`);
    console.log("It's a Tie!");
  }
}
