function isPostive(number) {
    return number > 0;
}

function isNegative(number) {
    return number < 0;
}

function isZero(number) {
    return number === 0;
}

function isEven(number) {
    return number % 2 === 0;
}

function describeNumber(number) {
    return {
        positive: isPostive(number),
        negative: isNegative(number),
        zero: isZero(number),
        even: isEven(number),
        odd: !isEven(number),
    };
}

console.log(describeNumber(20));
console.log(describeNumber(-69));
console.log(describeNumber(3));
console.log(describeNumber(0));