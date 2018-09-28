function loop (value, testFunction, updateFunction, body) {
	for(let i = value; testFunction(i); i = updateFunction(i)) {
      body(i)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
