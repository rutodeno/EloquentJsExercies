function fib(number) {
  let f0 = 1;
  let f1 = 1;
  
  if( number < 0) {
  		return -1;
  } else if ( number  === 0 ) {
  		return f0;
  } else if ( number === 1) {
    	return f1;
  }	else {
    	return fib(number - 1) + fib(number - 2); 
  }
}



function fibonacciLoop(number) {
	let f0 = 1;
  	let f1 = 1;	
  	let fn = 0;
  	if( number < 0) {
  		return -1;
  	} else if ( number  === 0 ) {
  		return f0;
  	} else if ( number === 1) {
    	return f1;
  	}	else {   
  			for(let i = 2; i < number +1 ; i++ ) {
 				fn = f0 + f1;
              	f0 = f1;
              	f1 = fn
    		}
      	return fn;
    }
}
