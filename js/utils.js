import { marmots, levelInput } from "./var.js";

export let displayIntervals;

export function randomNumberMarmots() {
  return marmots[Math.floor(Math.random() * marmots.length)];
}

export function display(div) {
  div.style.display = "block";
}

export function hide(div) {
  div.style.display = "none";
}

export function chooseDifficulty() {
  if (levelInput.value <= 5 && levelInput.value >= 1) {
    switch (parseInt(levelInput.value)) {
      case 1:
        displayIntervals = 1500;
        break;
      case 2:
        displayIntervals = 1200;
        break;
      case 3:
        displayIntervals = 1000;
        break;
      case 4:
        displayIntervals = 800;
        break;
      case 5:
        displayIntervals = 400;
        break;
      default:
        displayIntervals = 1000;
    }
  }

  return levelInput.value;
}
