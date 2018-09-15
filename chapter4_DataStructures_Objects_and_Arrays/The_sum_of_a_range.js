function range(start, end, step) {
    let numbersArray = [];
    if (!step) {
      for (let i = start; i < (end + 1) ; i++) { 	
            numbersArray.push(i);
      }    
  } else { 
    if (step < 0) {
      for (let i = start; i > (end - 1) ; i += step) {
        numbersArray.push(i);
      } 
     } else {
         for (let i = start; i < (end + 1) ; i += step) {
           numbersArray.push(i);
         }
      }  
  }	
return numbersArray;
}

function sum (array) {
let sum = 0;
  for (let i = 0; i < array.length; i++) {
      sum += array[i] 
  }
return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
console.log(sum(range(1,10)));
