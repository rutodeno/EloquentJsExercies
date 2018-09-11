function arrayToList (array) {
  	let length = array.length;
  	if (length < 1) {
    	return;
    } else if (length === 1) {
    	return  { value : array[0], rest: null }
    } else {
      	
    	return { value : array.shift(), rest: arrayToList(array)}
    }
}
function  listToArray (list) {
  let newArray = [];
  for (let node = list; node ; node = node.rest) {
  	let {value} = node;
  	newArray.push (value);
  }
  return newArray;
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30, 40])));
// [10, 20, 30, 40]
