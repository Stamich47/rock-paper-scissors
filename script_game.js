"use strict"


function getComputerChoice() {
  let cpu = Math.floor(Math.random() * 3)
  if (cpu > 1) {
    cpu = "Rock";
    return cpu;
  } else if (cpu < 1) {
    cpu = "Paper";
    return cpu;
  } else {
    cpu = "Scissors";
    return cpu;
  }
}



function playRound(playerSelection, computerSelection) {

  computerSelection = getComputerChoice();
  let computerSelectionLow = computerSelection.toLowerCase();

  playerSelection = prompt("Rock, Paper or Scissors?", "Please enter your choice.")
  if (playerSelection === null || playerSelection === "") {
    alert("Game cancelled")
    return
  }

  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {

  } else {
    alert("Incorrect Entry. Please type only \"Rock\", \"Paper\" or \"Scissors\".")
    playRound();
  }

  if (computerSelectionLow === "scissors" && playerSelection === "rock") {
    console.log("Player chooses Rock, Computer chooses Scissors");
    console.log("Player Wins!");
  } else if (computerSelectionLow === "paper" && playerSelection === "rock") {
    console.log("Player chooses Rock, Computer chooses Paper");
    console.log("Player Loses!");
  } else if (computerSelectionLow === "rock" && playerSelection === "paper") {
    console.log("Player chooses Paper, Computer chooses Rock");
    console.log("Player Wins!");
  } else if (computerSelectionLow === "scissors" && playerSelection === "paper") {
    console.log("Player chooses Paper, Computer chooses Scissors");
    console.log("Player Loses!");
  } else if (computerSelectionLow === "paper" && playerSelection === "scissors") {
    console.log("Player chooses Scissors, Computer chooses Paper");
    console.log("Player Wins!");
  } else if (computerSelectionLow === "rock" && playerSelection === "scissors") {
    console.log("Player chooses Scissors, Computer chooses Rock");
    console.log("Player Loses!");
  } else if (computerSelectionLow === playerSelection){
    console.log(`Both players chose ${computerSelection}!`);
    console.log(("It's a Tie!"));
  }

}

function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  
}

playGame();







