const racers = ["🐇", "🐢"];
const winningPoint = "🚩";
let tree = "🌴";
let step = 120;

const race = function(racers, step) {
  process.stdout.cursorTo(0, 1);
  process.stdout.clearScreenDown();
  let route = " ".repeat(20) + tree;
  if (100 - 2 * step > 0) {
    route = " ".repeat(20) + tree + " ".repeat(100 - 2 * step);
  }

  let distance = route + racers[0];

  if (120 - step < 10) {
    distance =
      " ".repeat(128 - step) + racers[0] + " ".repeat(step - 110) + " " + tree;
  }

  console.log(winningPoint + distance);
  console.log(winningPoint + " ".repeat(120 - step) + racers[1]);
};

for (let i = 1; i <= 120; i++) {
  setTimeout(race, i * 200, racers, i);
}
