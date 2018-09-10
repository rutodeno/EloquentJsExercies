
function reverseArray(array) {
	let swappedArray = [];
    for (let i = array.length -1; i >= 0; i-- ) {
      let temp = array[i];
      swappedArray.push(temp);
    }
  	return swappedArray;
}

function reverseArrayInPlace(array) {
  let middleVal = Math.floor(array.length/2);
  for (let i = 0; i < middleVal; i++) {
  	let temp = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i]; 
    array[i] = temp;
  }
}

console.log(reverseArray(["D","C", "B", "A"]));
let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
