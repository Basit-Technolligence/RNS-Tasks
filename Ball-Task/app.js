const fs = require("fs");
try {
  const data = fs.readFileSync("task1.txt", "UTF-8");
  const lines = data.split(/\r?\n/);
  const houseRegion = lines[0].split(" ");
  const s = Number(houseRegion[0]);
  const t = Number(houseRegion[1]);
  const ballValues = lines[1].split(" ");
  var a = Number(ballValues[0]);
  const b = Number(ballValues[1]);
  const red = lines[3].split(" ");
  const blue = lines[4].split(" ");
  var redBalls = [];
  red.forEach((r) => {
    if (Number(r) + a >= s && Number(r) + a <= t) {
      redBalls.push("yes");
    }
  });
  var blueBalls = [];
  blue.forEach((ball) => {
    if (Number(ball) + b >= s && Number(ball) + b <= t) {
      blueBalls.push("yes");
    }
  });
  console.log("Output");
  console.log("red balls = ", redBalls.length);
  console.log("blue balls = ", blueBalls.length);
} catch (e) {
  console.error(e);
}
