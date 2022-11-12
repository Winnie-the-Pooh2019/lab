const str = "Hello world";
console.log(str);

const number1 = 10;
const number2 = 14;
console.log(`number1 = ${number1} and number2 = ${number2}`);
console.log(`number1 + number2 = ${number1 + number2}`);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(`n1 + n2 = ${number1 + number2}
n1 - n2 = ${number1 - number2}
n1 * n2 = ${number1 * number2}
n1 / n2 = ${number1 / number2}
n1^2 = ${Math.pow(number1, 2)}
number % number2 = ${number1 % number2}`);

// replace all "o" characters with "O"
console.log(str.replace(/o/g, "O"));

// split the string into separate substrings
console.log(str.split(' '));