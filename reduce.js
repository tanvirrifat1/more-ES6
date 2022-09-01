// map. function, filter, find, reduce
const numbers = [1, 2, 3, 4, 5];
// .reduce (accumlatorFunction, initial value)
// accumlatorFunction use two parameters

const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total)

const total2 = numbers.reduce((previous, current) => {
    console.log(previous, current)
   return previous + current
}, 0);
console.log(total2)