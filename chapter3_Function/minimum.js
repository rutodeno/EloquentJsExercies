

function minimum(alpha, bravo) {
    if (alpha < bravo ) {
        return alpha;
    } else if(alpha > bravo) {
        return bravo;
    } else {
        return alpha;
    }
}


console.log(minimum(2,3));
console.log(minimum(10,10));