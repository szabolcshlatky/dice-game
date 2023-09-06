var randomNumber1 = Math.round(Math.random() * 5) + 1; // 1-6

var randomDiceImage = `dice` + randomNumber1 + `.png`; // dice1.png - dice6.png
var randomImageSource = `images/dices/` + randomDiceImage; // images/dices/dice1.png - images/dices/dice6.png

var image1 = document.querySelectorAll(`img`) [0];
image1.setAttribute(`src`, randomImageSource);

var randomNumber2 = Math.round(Math.random() * 5) + 1; // 1-6

var randomImageSource2 = `images/dices/dice` + randomNumber2 + `.png`; // images/dices/dice1.png - images/dices/dice6.png
document.querySelectorAll(`img`) [1].setAttribute(`src`, randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(`h1`).innerHTML = `🎲 Player 1 Wins!`;
} else if (randomNumber1 === randomNumber2) {
  document.querySelector(`h1`).innerHTML = `🎲 Draw! 🎲`;
} else {
  document.querySelector(`h1`).innerHTML = `Player 2 Wins! 🎲`;
}