// 내가 짠 코드
// const [, ...input] = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
// let inputArr = []

// function ab (a,b) {
//   for(let i = 0; i < a.length; i++) {
//     if(a.charCodeAt(i) !== b.charCodeAt(i)) {
//       return a.charCodeAt(i) - b.charCodeAt(i)
//     }
//   }
// }
// function sortWords () {
//   let answer = '';
//   inputArr = [...new Set(input)]
//   inputArr.sort((a,b) => {
//     return a.length === b.length
//       ? ab(a,b)
//       : a.length - b.length
//   })
//   for(words of inputArr) {
//     answer += `${words}\n`
//   }
//   return answer
// }

// console.log(sortWords())

// 참고할 만한 코드
const [n, ...arr] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

function solution() {
  const set = [...new Set(arr)];
  return set
    .sort()
    .sort((a, b) => a.length - b.length)
    .join("\n");
}

console.log(solution());


// 참고할 만한 코드 2
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
const answer = new Set(sorted);
console.log(Array.from(answer).join('\n'));
