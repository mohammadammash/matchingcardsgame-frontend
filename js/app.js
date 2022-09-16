const cards = document.getElementsByClassName("card");
const logos = document.getElementsByClassName("programming-logo");

let hasFlippedCard = false;
let firstCard, secondCard, firstCard_imgsrc, secondCard_imgsrc;
let score = 0;
// to make sure not more than 2 cards are flipped at same time
let flippedNow = false;

function flipCard() {
  // add class flipCard to the card clicked(flip-it to show logo)
if(!flippedNow){  
  this.childNodes[1].classList.add("flip-card");
    if (!hasFlippedCard) {
      // first flip
      hasFlippedCard = true;
      firstCard = this;
      firstCard_imgsrc = this.childNodes[1].childNodes[3].childNodes[1].src;
    } else {
      //second flip
      secondCard = this;
      secondCard_imgsrc = this.childNodes[1].childNodes[3].childNodes[1].src;

      // if cards matches: (score + 1 and remove event listener so the user cannot cheat)
      if (firstCard_imgsrc === secondCard_imgsrc) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        score += 1;
      } else {
        //not a match - setTimeout to reflip cards after specific time, so user can view both cards
        flippedNow = true;
        setTimeout(() => {
          firstCard.childNodes[1].classList.remove("flip-card");
          secondCard.childNodes[1].classList.remove("flip-card");
          flippedNow = false;
        }, 1500);
      }

      console.log(score);
      hasFlippedCard = false; //reset the comparison
    }
  }
}

// add event listener for each card
for (let c of cards) c.addEventListener("click", flipCard);
