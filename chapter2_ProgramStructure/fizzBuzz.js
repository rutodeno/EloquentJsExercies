
// loop thorugh 1 to 100
// fizz for numbers divisible by 3
// buzz for numbers divisible by 5

for (let i = 1; i <101 ;  i++) {


    if( i % 3 === 0  && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if ( i % 3 === 0) {
        console.log("Fizz");
    } else if ( i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

