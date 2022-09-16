const cards = document.getElementsByClassName("card");
const logos = document.getElementsByClassName("programming-logo");

let hasFlippedCard = false;
let firstCard, secondCard;
let score = 0;

function flipCard() {
  // add class flipCard to the card clicked(flip-it to show logo)
  this.childNodes[1].classList.add("flip-card");
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
    
    //after second flip:
    // if cards matches: (score + 1 and hide cards)
    if (firstCard_imgsrc === secondCard_imgsrc) {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
      score+=1;
    } else {
      //not a match - setTimeout to reflip cards after 1.8 seconds, so user can view both cards
      setTimeout(()=>{
        firstCard.childNodes[1].classList.remove("flip-card");
      secondCard.childNodes[1].classList.remove("flip-card");
      console.log("oops");
      },1800);
    }

    hasFlippedCard = false; //reset the comparison
  }
}

// add event listener for each card
for (let c of cards) c.addEventListener("click", flipCard);
