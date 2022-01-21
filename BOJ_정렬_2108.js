let fs = require("fs");
let input = fs
  .readFileSync("./input2108.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));
input.shift();
input.sort((a, b) => b - a);

function getArithmeticMean(input) {
  const sum = input.reduce((p, c) => p + c, 0);
  const mean = Math.round(sum / input.length);
  return mean;
}
function getMedianValue(input) {
  const median = Math.floor(input.length / 2);
  return input[median];
}
function getfrequencyValue(input) {
  const counts = {};
  if (input.length === 1) {
    return input[0];
  }
  for (const num of input) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  let entries = Object.entries(counts);
  entries.sort((a, b) => {
    if (b[1] > a[1]) return 1;
    if (b[1] < a[1]) return -1;

    if (parseInt(a[0]) > parseInt(b[0])) return 1;
    if (parseInt(a[0]) < parseInt(b[0])) return -1;
  });
  if (entries[0][1] === entries[1][1]) {
    return parseInt(entries[1][0]);
  } else {
    return parseInt(entries[0][0]);
  }
}
function getRange(input) {
  return input[0] - input[input.length - 1];
}

console.log(getArithmeticMean(input));
console.log(getMedianValue(input));
console.log(getfrequencyValue(input));
console.log(getRange(input));
