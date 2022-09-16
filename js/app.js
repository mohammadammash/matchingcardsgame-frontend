const cards = document.getElementsByClassName("card");
const logos = document.getElementsByClassName("programming-logo");
const scoreShow = document.getElementById("score");

let hasFlippedCard = false;
let firstCard, secondCard, firstCard_imgsrc, secondCard_imgsrc;
let score = parseInt(scoreShow.textContent);
// to make sure not more than 2 cards are flipped at same time
let flippedNow = false;

function flipCard() {
  // add class flipCard to the card clicked(flip-it to show logo)(we used firstChildNode to flip the specific images not the whole card)
  if (!flippedNow) {
    this.childNodes[1].classList.add("flip-card");
    if (!hasFlippedCard) {
      // first flip (saving card main div and card-back image source)
      hasFlippedCard = true;
      firstCard = this;
      firstCard_imgsrc = this.childNodes[1].childNodes[3].childNodes[1].src;
    } else {
      //second flip (saving card main div and card-back image source)
      secondCard = this;
      secondCard_imgsrc = this.childNodes[1].childNodes[3].childNodes[1].src;

      // if cards matches: (score + 1 and remove event listener so the user cannot cheat)
      if (firstCard_imgsrc === secondCard_imgsrc) {
        flippedNow = true;
        setTimeout(() => {
          firstCard.childNodes[1].classList.add("display-none");
          secondCard.childNodes[1].classList.add("display-none");
          score += 1;
          flippedNow = false;
          // update score show
          scoreShow.textContent = score;
        }, 1800);
      } else {
        //not a match - setTimeout to reflip cards after specific time, so user can view both cards
        flippedNow = true;
        setTimeout(() => {
          firstCard.childNodes[1].classList.remove("flip-card");
          secondCard.childNodes[1].classList.remove("flip-card");
          // return flipping to be able
          flippedNow = false;
          score -= 2;
          // eliminate option of having negative score
          if (score < 0) score = 0;
          // update score show
          scoreShow.textContent = score;
        }, 1500);
      }

      hasFlippedCard = false; //reset the comparison
    }
  }
}

// add event listener for each card
for (let c of cards) c.addEventListener("click", flipCard);
