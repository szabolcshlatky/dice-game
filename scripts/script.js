var randomNumber1 = Math.round(Math.random() * 5) + 1; // 1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomImageSource = "images/dices/" + randomDiceImage; // images/dices/dice1.png - images/dices/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var randomNumber2 = Math.round(Math.random() * 5) + 1; // 1-6
var randomImageSource2 = "images/dices/dice" + randomNumber2 + ".png"; // images/dices/dice1.png - images/dices/dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "\uD83C\uDFB2 Player 1 Wins!";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "\uD83C\uDFB2 Draw! \uD83C\uDFB2";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! \uD83C\uDFB2";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFFN0QsSUFBSSxlQUFlLEdBQUcsTUFBTSxHQUFHLGFBQWEsR0FBRyxNQUFNLENBQUMsQ0FBQyx3QkFBd0I7QUFDL0UsSUFBSSxpQkFBaUIsR0FBRyxlQUFlLEdBQUcsZUFBZSxDQUFDLENBQUMsa0RBQWtEO0FBRTdHLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQztBQUNsRCxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBRTlDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFFN0QsSUFBSSxrQkFBa0IsR0FBRyxtQkFBbUIsR0FBRyxhQUFhLEdBQUcsTUFBTSxDQUFDLENBQUMsa0RBQWtEO0FBQ3pILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFFN0UsSUFBSSxhQUFhLEdBQUcsYUFBYSxFQUFFO0lBQ2pDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLDZCQUFtQixDQUFDO0NBQzlEO0tBQU0sSUFBSSxhQUFhLEtBQUssYUFBYSxFQUFFO0lBQzFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLGlDQUFhLENBQUM7Q0FDeEQ7S0FBTTtJQUNMLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLDZCQUFtQixDQUFDO0NBQzlEIn0=