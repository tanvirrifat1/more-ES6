const numbers = [12, 15, 46,2, 7, 32, 45, 68, 19, 64, 2 ,4];
const bigNums = numbers.filter(num => num > 20);
console.log(bigNums)

const smallNums = numbers.filter(num => num <10);
console.log(smallNums)

const even = numbers.filter(num => num % 2 === 0);
console.log(even);


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 85000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 25000},
];

// const expensive = products.filter(product => product.price > 100000);
const expensive = products.filter(product => product.price > 1000);
console.log(expensive)