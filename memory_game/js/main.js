//array to store the cards
let cards = ['queen', 'queen', 'king', 'king'];
//empty array to store cards in play
let cardsInPlay =[];

//check if two cards match
function checkForMatch(){
	if (cardsInPlay[0]===cardsInPlay[1]) console.log("You found a match!");
	else console.log("Sorry, try again.");
	//};
};
//function to flip and check if 
function flipCard(cardId){
	console.log("User flipped " +cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) checkForMatch();
};
flipCard(0);
flipCard(2);

