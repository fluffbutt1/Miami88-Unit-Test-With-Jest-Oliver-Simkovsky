// Convert Euros to Dollars
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * 1.07;
};

// Convert Dollars to Yen
const fromDollarToYen = function(valueInDollar) {
    return valueInDollar * 154.74;
};

// Convert Yen to Pounds
const fromYenToPound = function(valueInYen) {
    return valueInYen / 195;
};

// Sum two numbers
const sum = function(a, b) {
    return a + b;
};

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound,
    sum
};