import {
  display,
  hide,
  randomNumberMarmots,
  displayIntervals,
  chooseDifficulty,
} from "./utils.js";
import { divScore, btnStart, divTime, divLevel } from "./var.js";

let timer = 31;

export function countTimer() {
  timer--;

  divTime.textContent = `Time : ${timer} seconds`;
}

export function game() {
  let marmotNumber = randomNumberMarmots();
  display(marmotNumber);
  setTimeout(() => hide(marmotNumber), displayIntervals);
}

export function startGame() {
  timer = 31;

  chooseDifficulty();
  display(divScore);
  display(divTime);
  hide(btnStart);
  hide(divLevel);
}

export function finishGame() {
  hide(divScore);
  hide(divTime);
  alert(divScore.textContent);
  display(btnStart);
  display(divLevel);
  timer = 0;
}
