let countChar = (string, letter) => {
	let numberOfchars = 0;
  	let i = 0;
  	while (i < string.length) {
    	if(string[i] === letter) {
        	numberOfchars++;
        }
      i++;
    }
  	return numberOfchars;
};

let countBs = (string) => {
	return countChar(string, 'B');
};

console.log(countBs("BBBC"));
// → 3
console.log(countChar("kakkerlak", "k"));
// → 4
