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
//track how many wins you have
let score = 0;
//empty array to store cards in play
let cardsInPlay =[];

//create a gameboard
let createBoard = function (){
	for (let i =0; i < cards.length; ++i){
		//create an img element for each card
		let cardElement = document.createElement('img'); 
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		cardElement.innerHTML = cardElement;
		document.getElementById('game-board').appendChild(cardElement);
	};
};


//check if two cards match and reset board
function checkForMatch(){
	if (cardsInPlay[0]===cardsInPlay[1]){
		score += 1;
	 	alert(`You found a match! You have won ${score} games.`);
	}
	else { 
		alert("Sorry, try again.");
		
		
	};
	resetBoard();
	
};
//function to flip to the face of the card
function flipCard(){
	let cardId = this.getAttribute('data-id');

	console.log("User flipped " +cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay.length === 2){ 
		setTimeout(checkForMatch, 1000);
	};
		
};

function resetBoard(){
	let cardList = document.getElementById('game-board').childNodes; 
	console.log(cardList);
	for (let i =0; i < cardList.length; ++i){
		cardList[i].setAttribute('src','images/back.png');
		
	};
	cardsInPlay.length = 0;
}
createBoard();


