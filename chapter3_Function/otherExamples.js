function minus(a,b) {
    if (b === undefined) return -a;
    else 
        return a-b; 
}

console.log(minus(10));
console.log(minus(10,5));

function power(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(4));
console.log(power(2,6));


function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap10 = wrapValue(10)
let wrap2 = wrapValue(2);
console.log(wrap10());
console.log(wrap2());

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

const powerRecursive = function(base, exponent) {
    if(exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1 );
    }
}

console.log(powerRecursive(10,5));

function findSolution(target) {
    function find(current, history) {
        if(current == target) {
            return history;
        } else if(current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                    find (current * 3, `(${history} * 3)`);
        }

    }
    return find(1, "1");
}

console.log(findSolution(13));

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 4)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);



