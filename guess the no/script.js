// THE MODAL FUNCTION

let cross = document.querySelector(".cross");
let overlay = document.querySelector(".overlay");
let modals = document.querySelector(".modals");
cross.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modals.classList.add("hidden");
});

//THE NUMBER GENERATION

let number = Math.trunc(Math.random() * 20) + 1;
let guessNumber = document.querySelector(".number");

//CHECK THE NUMBER AND GAME LOGIC

let score = 20;
let highscore = 0;
let displayScore = document.querySelector(".display-score");
let displayHighscore = document.querySelector(".display-highscore");
let btnCheck = document.querySelector(".btn-check");
btnCheck.addEventListener("click", () => {
  let inputNumber = Number(document.querySelector(".input-number").value);

  //WHEN NO INPUT

  if (!inputNumber || inputNumber > 20) {
    document.querySelector(".comment").textContent = "⛔ Invalid Number";
  }
  //WHEN GUESS IS RIGHT
  else if (inputNumber === number) {
    document.querySelector(".container").style.backgroundColor = "green";
    document.querySelector(".comment").textContent = "🎉 You win the Game!";
    guessNumber.style.width = "30rem";
    guessNumber.textContent = number;

    //HIGHSCORE LOGIC

    if (score > highscore) {
      highscore = score;
      displayHighscore.textContent = score;
    }
  }
  //WHEN GUESS IS WRONG
  else if (inputNumber !== number) {
    if (score > 1) {
      document.querySelector(".comment").textContent =
        inputNumber > number ? "📈 Too High!" : " 📉 Too Low!";
      score--;
      displayScore.textContent = score;
    } else {
      document.querySelector(".comment").textContent = "💥 You Lost!";
      displayScore.textContent = 0;
    }
  }
});

//AGAIN BUTTON

let btnAgain = document.querySelector(".btn-again");
btnAgain.addEventListener("click", () => {
  score = 20;
  document.querySelector(".container").style.backgroundColor = "#222";
  document.querySelector(".comment").textContent = "Start Guessing ...";
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".input-number").value = "";
  displayScore.textContent = 20;
  guessNumber.textContent = "?";
  guessNumber.style.width = "19rem";
});
