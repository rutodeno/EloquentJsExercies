function binary_search(array, target) {
	let left = 0;
  	let right = array.length - 1;
  	while (left <= right){
    	let middle = Math.floor((left + right)/2);
      	if (array[middle] < target) {
        	left = middle + 1;
        } else if (array[middle] > target) {
        	right = middle -1;
        } else {
        	return middle;
        }
    }
  	return -1;
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binary_search(array1, 1));
