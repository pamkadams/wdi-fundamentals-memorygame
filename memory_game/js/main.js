//array to store the cards
let cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},

	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	
	{

		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}

];
//empty array to store cards in play
let cardsInPlay =[];

//check if two cards match
function checkForMatch(){
	if (cardsInPlay[0]===cardsInPlay[1]) alert("You found a match!");
	else alert("Sorry, try again.");
	//};
};
//function to flip and check if 
function flipCard(cardId){
	console.log("User flipped " +cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) checkForMatch();
};
flipCard(0);
flipCard(2);

