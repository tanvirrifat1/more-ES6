const numbers = [12, 5, 14, 46,  2, 7, 32, 45, 68, 19, 65, ,4];

const five = numbers.find(num => num % 5 === 0);
console.log(five)
const fiveAll = numbers.filter(num => num % 5 === 0);
console.log(fiveAll)

const products = [
    {id: 1, name: 'laptop', price: 65000},
    {id: 2, name: 'mobile', price: 80000},
    {id: 3, name: 'watch', price: 30000},
    {id: 4, name: 'tablet', price: 23000},
];

const cheap = products.find(products => products.price < 40000);
console.log(cheap)