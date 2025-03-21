import { marmots, btnStart, divScore } from "./js/var.js";
import { startGame, finishGame, game, countTimer } from "./js/game.js";
import { chooseDifficulty } from "./js/utils.js";

let counter = 0;

setInterval(countTimer, 1000);

marmots.forEach((marmot) => {
  marmot.addEventListener("click", () => {
    counter++;
    divScore.textContent = `Score : ${counter}`;
    marmot.style.display = "none";
  });
});

btnStart.addEventListener("click", () => {
  counter = 0;
  divScore.textContent = `Score : ${counter}`;
  if (![1, 2, 3, 4, 5].includes(parseInt(chooseDifficulty()))) {
    alert("Please choose your level before the game (The level must be between 1 and 5) !");
  } else {
    startGame();
    const interval = setInterval(game, 1000);
    setTimeout(() => clearInterval(interval), 30000);
    setTimeout(() => finishGame(), 31000);
  }
});
