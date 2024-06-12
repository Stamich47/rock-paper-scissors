const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const container = document.getElementById('container');
const buttons = document.getElementById('buttons');
const imageLeft = document.querySelector('.left-img');
const imageRight = document.querySelector('.right-img');
const playerScore = document.querySelector('.player-score');
const cpuScore = document.querySelector('.cpu-score');
const gameText = document.querySelector('.game-text');

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

function attemptToMakeThisWork() {
  for (let i = 1; i < 4; i++) {
    let refreshInt = setInterval(() => {
      if (i === 3) {
        clearInterval(refreshInt);
      }
      imageLeft.classList.add('animate-out');
      imageRight.classList.add('animate-out');
    }, i * 100);
    let refreshInt2 = setInterval(() => {
      if (i === 3) {
        clearInterval(refreshInt2);
      }
      imageLeft.classList.remove('animate-out');
      imageRight.classList.remove('animate-out');
    }, i * 610);
  }
}

function fadingImg() {
  let i = 0;
  const fadeImg = setInterval(() => {
    i += 1;
    if (i === 3) {
      clearInterval(fadeImg);
    }
    imageLeft.src = './images/rock-left.png';
    imageRight.src = './images/rock-right.png';
    imageLeft.classList.add('animate-out');
    imageRight.classList.add('animate-out');
    setTimeout(() => {
      imageLeft.classList.remove('animate-out');
      imageRight.classList.remove('animate-out');
    }, 600);
  }, 650);
}

// fadingImg();

function gameResults(e) {
  buttons.removeEventListener('click', gameResults);
  fadingImg();
  setTimeout(() => {
    const cpuChoice = getComputerChoice();
    const playUpperCase =
      e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1);
    if (playUpperCase === cpuChoice) {
      gameText.innerText = `Player has ${playUpperCase}. Computer has ${cpuChoice}. It's a tie!`;
    } else if (
      (playUpperCase === 'Rock' && cpuChoice === 'Scissors') ||
      (playUpperCase === 'Scissors' && cpuChoice === 'Paper') ||
      (playUpperCase === 'Paper' && cpuChoice === 'Rock')
    ) {
      playerScore.innerText = parseInt(playerScore.innerText, 10) + 1;
      gameText.innerText = `Player has ${playUpperCase}. Computer has ${cpuChoice}. Player Wins!`;
    } else {
      cpuScore.innerText = parseInt(cpuScore.innerText, 10) + 1;
      gameText.innerText = `Player has ${playUpperCase}. Computer has ${cpuChoice}. Computer Wins :(`;
    }

    if (playUpperCase === 'Rock') {
      imageLeft.src = './images/rock-left.png';
    } else if (playUpperCase === 'Scissors') {
      imageLeft.src = './images/scissors-left.png';
    } else {
      imageLeft.src = './images/paper-left.png';
    }

    if (cpuChoice === 'Rock') {
      imageRight.src = './images/rock-right.png';
    } else if (cpuChoice === 'Scissors') {
      imageRight.src = './images/scissors-right.png';
    } else {
      imageRight.src = './images/paper-right.png';
    }
    buttons.addEventListener('click', gameResults);
  }, 2550);
}

buttons.addEventListener('click', gameResults);
