
function deepEqual (objA, objB) {
	if ((typeof objA && typeof objB === 'object') && ((objA && objB)!= null )) {
    	let keysA = Object.keys(objA);
      	let keysB = Object.keys(objB);
      	
      	if (keysA.length != keysB.length) {
        	return false;
        } else {
        	
        }
      	
    }
	else {
    	return false;
    }
  
  	function keysCheck(keysA, keysB) {
    	for (let i = 0; i < keysA.length; i++) {
            	if (keysA[i] != keysB[i]) {
                	return false;
                } else {
                	valueCheck(); // checks to see if individual values of the object are equal
                }
            }
    }
  
  	function valueEqual(objA, objB) {
    	let keysA = Object.keys(objA);
      	let keysB = Object.keys(objB);
      	
      	objA[keysA[0]];
      	
    }
  
  	recursiveCall(obj) {
    	let keys = Object.keys(obj);
      	let objArray = [];
      
      	
    }
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(null, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
