//array to store the cards
let cards = ['queen', 'queen', 'king', 'king'];
//empty array to store cards in play
let cardsInPlay =[];
//card flipped by user
let cardOne = cards[0];
//add card flipped by user to cardsInPlay array
cardsInPlay.push(cardOne);
console.log("User flipped " +cardsInPlay[0]);
////card flipped by user
let cardTwo = cards[2];
//add card flipped by user to cardsInPlay array
cardsInPlay.push(cardTwo);
console.log("User flipped " +cardsInPlay[1]);
if (cardsInPlay.length === 2){
	if (cardsInPlay[0]===cardsInPlay[1]) alert("You found a match!");
	else alert("Sorry, try again.");
};
