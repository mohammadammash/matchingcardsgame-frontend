const cards = document.getElementsByClassName("card");
const logos = document.getElementsByClassName("programming-logo");

let hasFlippedCard = false;
let firstCard, secondCard;
let [matches, flippedCards] = [0, 0];
let score = 0;

function flipCard() {
  // add class flipCard to the card clicked(flip-it to show logo)
  this.childNodes[1].classList.add("flip-card");
  flippedCards += 1;
  let firstCard_imgsrc, secondCard_imgsrc;

  if (!hasFlippedCard) {
    // first flip
    hasFlippedCard = true;
    firstCard = this;
    firstCard_imgsrc = this.childNodes[1].childNodes[3].childNodes[1].src;
  } else {
    //second flip
    secondCard = this;
    secondCard_imgsrc = this.childNodes[1].childNodes[3].childNodes[1].src;

  }
}

// add event listener for each card
for (let c of cards) c.addEventListener("click", flipCard);
