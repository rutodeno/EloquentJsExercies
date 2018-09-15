const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++ ){
        result *= base;
    }
    return result;
};

console.log(power(2,10));

const halve = function(n) {
    return n / 2;
};

let n = 10;
console.log(halve(n));
console.log(n);

// Nested Scope
// Lexical scoping
const hummus = function(factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(2, "tablespoon", "oliveoil");
};


let lauchMissiles = function() {
    missileSystem.lauch("now");
};


// if (safeMode) {
//     lauchMissiles = function () {/* do nothing */ }
// }


// function declaration example

console.log("The future says:", future());

function future() {
    return "You will NEVER have flying cars !!";
}


const square2 = (x) => x * x;
const horn = () => {
    console.log("Toot");
};

function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

