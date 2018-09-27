let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

const combineArrays = arrays.reduce((a,b) => a.concat(b));
console.log(combineArrays);
// → [1, 2, 3, 4, 5, 6]
