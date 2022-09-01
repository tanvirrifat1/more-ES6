const numbers = [12,34, 64, 56, 48];
const half = numbers.map(n => n/2);
const third = numbers.map(x => x/3);
console.log(half)
console.log(third)

const firends = ['Tom Hanks', 'Tom cruise', 'Tom Brady', 'Akkas Khan Ali'];
const firstletter = firends.map(f => f[0]);
console.log(firstletter);

const nameLengths = firends.map(f => f.length);
console.log(nameLengths);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 30000},
    {id: 1, name: 'tablet', price: 25000},
];

// const items = products.map(products => console.log(products.name))
const items = products.map(products => products.name);
console.log(items)
const price = products.map(p => p.price);
console.log(price)