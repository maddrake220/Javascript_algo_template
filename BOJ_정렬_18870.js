const [, ...input] = require('fs').readFileSync('./input.txt').toString().trim().split('\n');

function compCoord() {
  const arr = input[0]
    .split(' ')
    .map(v => Number(v))

  const set = [...new Set(arr)].sort((a,b) => a - b)
  const answer = []
  const obj = {}

  set.forEach((value, index) => obj[value] = index)
  
  for(i in arr) {
    answer.push(obj[arr[i]])
  }
 
  return answer.join(' ')
}

console.log(compCoord())
