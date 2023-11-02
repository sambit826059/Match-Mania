const cards = [
    { id:1, imgSrc: 'media/playing-images/dragon.png', isFlipped: false },
    { id:2, imgSrc: 'media/playing-images/lion.png', isFlipped: false },
    { id:3, imgSrc: 'media/playing-images/tiger.png', isFlipped: false }
];

//array to keep track of flipped cards
let flippedCards = [];

//function to shuffle the cards array
var shuffleCards = () => {

};

//rendering gameboard
var renderBoard = () => {
    const cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = '';

    cards.forEach ((card) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add(card1);
        cardElement.dataset.id = card.id

        const backImg = document.createElement("img");
        backImg.src = card.imgSrc;
        backImg.classList.add("back");

        const frontImg = document.createElement("img");
        frontImg.src = "media/playing-images/middle-finger.png";
        frontImg.classList.add("front");

        cardElement.appendChild(backImg);
        cardElement.appendChild(frontImg);

        cardContainer.appendChild(cardElement);

        //click event listner to each card
        cardElement.addEventListener("click", ()=> {
            if (flippedCards.length <2 && !card.isFlipped) {
                flipCard (cardElement);
                flippedCards.push(card);

                if (flippedCards.length == 2) {
                    if (checkmatch (flippedCards[0], flipCard[1])) {
                        //match found
                        flippedCards = [];
                    }else {
                        //no match.flip to default state
                        setTimeout (() => {
                            flipCard(flippedCards[0]);
                            flipCard(flippedCards[1]);
                            flippedCards = [];
                        },1000);
                    }
                }
            }
        })
    })
}

//function to flip cards
var flipCard = () => {

};

//function to check if two cards match
var checkmatch = () => {

};

//shuffle the cards and render the initial gameboard
shuffleCards(cards);
renderBoard();