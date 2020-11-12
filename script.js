'use strict';

/**
 * @method {String} el String que pegará o elemntos da DOM
 * @returns {String} Retorna o controle dos campos HTML
 */
let number = Math.random() * 20;
let numberToGuess = Math.ceil(number);
let score = 20;
let highScore = 0;

// 1 - ) capturar a as tags
const DOMCtrl = {
  againButton: getDOM('.again'),
  myNumber: getDOM('.number'),
  checkAns: getDOM('.check'),
  score: getDOM('.score'),
  message: getDOM('.message'),
  highscore: getDOM('.highscore'),
  guess: getDOM('.guess'),
  body: getDOM('body'),
};

DOMCtrl.againButton.addEventListener('click', () => {
  resetGame();
});

DOMCtrl.checkAns.addEventListener('click', () => {
  let guess = Number(DOMCtrl.guess.value);

  if (!guess) {
    DOMCtrl.message.innerText = 'No Number';
    console.log((DOMCtrl.message.innerText = 'No Number'));
  } else if (guess > 20) {
    DOMCtrl.message.innerText = 'O valor máximo é 20';
  } else if (guess > numberToGuess) {
    DOMCtrl.message.innerText = 'Too High';
    score = score - 1;
    isZero(score);
    DOMCtrl.score.innerText = score;
  } else if (guess < numberToGuess) {
    DOMCtrl.message.innerText = 'Too Small';
    score = score - 1;
    isZero(score);
    DOMCtrl.score.innerText = score;
  } else if (guess === numberToGuess) {
    winTheGame();
  }
});

function gameOver() {
  DOMCtrl.message.innerText = 'Game Over';
  DOMCtrl.checkAns.style.display = 'none';
}

function winTheGame() {
  DOMCtrl.message.innerText = 'Congratulations! You Win';
  highScore += score;
  DOMCtrl.highscore.innerText = highScore;
  DOMCtrl.myNumber.innerText = numberToGuess;
  DOMCtrl.checkAns.style.display = 'none';
  number = Math.random() * 20;
  numberToGuess = Math.ceil(number);

  //Ui of page - color background
  DOMCtrl.body.style.backgroundColor = '#60b347';
}

function getDOM(el) {
  return document.querySelector(el);
}

function isZero(sc) {
  if (sc === 0) {
    sc = 0;
    gameOver();
  }
}

function resetGame() {
  score = 20;
  DOMCtrl.score.innerText = score;
  DOMCtrl.checkAns.style.display = 'block';
  DOMCtrl.guess.value = 0;
  DOMCtrl.message.innerText = 'Start guessing...';
  DOMCtrl.myNumber.innerText = '?';

  //Ui of page - color background
  DOMCtrl.body.style.backgroundColor = '#222';
}

// 2 - ) Atribuir o valor misterioso a uma variavel entre 0 e 20

// 3 - ) Fazer o botaõ CHECK capturar o input do usuario

// 4 - ) Vaslidar entrada do usuario

// 5 - ) comparar entrada do usuario com o numero misterioso

// 6 - ) se numero === misterioso aumente o score se não score 0

// 7 - ) Fazer botão TRY AGAIN resetar patida, mas manter o score total
