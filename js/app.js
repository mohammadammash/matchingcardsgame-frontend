const cards = document.getElementsByClassName("card");
const logos = document.getElementsByClassName("programming-logo");
const scoreShow = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const allLogos = document.getElementsByClassName("programming-logo");

// ----START OF GAME PLAY SECTION----
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
      // to remove same image double click
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
// ----END OF GAME PLAY SECTION----

// ---------------
// -----START OF RESET SECTION-----
// const shuffleImages = () => {
//   const images = [
//     "./assets/java.png",
//     "./assets/php.png",
//     "./assets/python.png",
//     "./assets/java.png",
//     "./assets/python.png",
//     "./assets/php.png",
//   ];
//   for (let i = images.length; i > 1; i--) {
//     // Pick random element to swap.
//     var j = Math.ceil(Math.random() * (i - 1));
//     var tmp = images[j];
//     images[j] = images[i - 1];
//     images[i - 1] = tmp;
//   }
//   // change image/logo according to new shuffled array
//   let i = 0;
//   for (let image of allLogos) image.src = images[i];
// };

// const resetGame = () => {
//   //make sure all cards are flipped
//   for (let c of cards) {
//     // cannot use arrow-function with this => replaced by namedFunction
//     c.addEventListener("click", function () {
//       this.childNodes[1].classList.remove("flip-card");
//       // reshow hidden images
//       this.childNodes[1].classList.remove('display-none');
//     });
//   }
//   // shuffleImages();
// };

// event listener for restart button - to restart images but not score surely :)
// restartButton.addEventListener("click", resetGame);
