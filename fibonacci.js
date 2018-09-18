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
