const max = Math.max(33,23,243,545,33);
// console.log(max)
const largest = [44,5,12,56,776,888,32];
const number = Math.max(...largest);
// console.log(...largest)
// console.log(number);

const number2 = [...largest];
largest.push(865);
number2.push(222)
console.log(largest);
console.log(number2);

const number3 = [...largest];
console.log(number3);

const number4 = [44,33,...largest,44];
console.log(number4)