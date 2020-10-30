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
document.querySelector('section')
  .addEventListener('click', handleLetterClick);

  document.getElementById('replay')
  .addEventListener('click', init);

/*----- event listeners -----*/


/*----- functions -----*/
init();

function handleLetterClick(evt) {
  const letter = evt.target.textContent;
  console.log(letter);
}

function render() {

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