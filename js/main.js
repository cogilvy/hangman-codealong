/*----- constants -----*/
const WORDS = [
  'ARRAY', 'FUNCTION', 'BINARY', 'VARIABLE',
  'BOOLEAN', 'REACT', 'COMPUTER SCIENCE',
  'TERMINAL', 'EVENTS'
];

/*----- app's state (variables) -----*/
let secretWord;
let guessWord;
let gameStatus;  // null = in progress; 👎 = lose; 👍 = win
let wrongLetters;

/*----- cached element references -----*/
const guessEl = document.getElementById('guess');
const replayBtn = document.getElementById('replay');

/*----- event listeners -----*/
document.querySelector('section')
  .addEventListener('click', handleLetterClick);

  document.getElementById('replay')
  .addEventListener('click', init);


/*----- functions -----*/
init();

// in response to user interaction, update state and call render
function handleLetterClick(evt) {
  // debugger;
  const letter = evt.target.textContent;
  // Exit function if the following conditions exit
  if (evt.target.tagName !== 'BUTTON' || gameStatus) return;
  console.log(letter);


  render();
}

// render transfers all state to the DOM
function render() {
  guessEl.textContent = guessWord;
  replayBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
}

function init() {
  const rndIdx = Math.floor(Math.random() * WORDS.length);
  secretWord = WORDS[rndIdx];
  guessWord = '';
  // init guessWord with underscores for each char in secretWord
  for (let char of secretWord) {
    guessWord += (char === ' ') ? ' ' : '_';
  }
  // Using regular expression
  // guessWord = secretWord.replace(/[A-Z]/g, '_');
  gameStatus = null;
  wrongLetters = [];
  render();
}