let arrays = [[1, 2, 3], [4, 5], [6]];
let flattenArray = arrays.reduce((a, b) => a.concat(b) );
console.log(flattenArray);
// → [1, 2, 3, 4, 5, 6]
