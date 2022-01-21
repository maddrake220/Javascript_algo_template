// 참고 할만한 코드
const [n, ...input] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

function solution() {
  const location = input
    .map((el) => el.split(" "))
    .sort((a, b) => {
      return Number(a[0]) === Number(b[0])
        ? Number(a[1]) - Number(b[1])
        : Number(a[0]) - Number(b[0]);
    });

  return location.join("\n").replace(/,/g, " ");
}

console.log(solution());

// 내가 짠 코드
// let fs = require("fs");
// let input = fs.readFileSync("./input.txt").toString().trim().split("\n")
// input.shift();

// const array = input.map(v => {
//   const splited = v.split(' ')
//   return [Number(splited[0]),Number(splited[1])]
// })

// array.sort((a,b) => {
//   if( a[0] > b[0] ) return 1
//   if( a[0] < b[0] ) return -1

//   if( a[1] > b[1] ) return 1
//   if( a[1] < b[1] ) return -1
// })

// let answer = ''
// for(nums of array) {
//   answer += `${nums.toString().replace(','," ")}\n`
// }

// console.log(answer)
