// 1. var let const
// brakup with var
const numbers = [12, 859, 654, 15];
let salary = 450;
salary = 480;
// console.log(salary);

// 2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remining = salary - salary*tax;
    const total = remining + bonus;
    return total;
}
const result = calculateSalary(5, 2, 22);
console.log(result);

// 3. templete string
const elementHTML = `
    <div>
        <h3> Name: </h3>
        <p> Address : </p>
        <p> salary: ${calculateSalary(10000, 0, 0)} : </p>
        <p> Address: ${numbers[2]} </p>
    </div>    
`
// 4. arrow function
const doubleIt = x => x*2;

const calculateSalary2 = (salary, tax, bonus) => salary-salary * tax + bonus;

// 5. spread
 const ages = [10,12, 15, 16, 14, 18];
 const newAges = [...ages, 25, 32, 28];
// console.log(newAges)

// destructuring
const {x, y, z, ...c} = {x: 45, y: 12, z: 33, name: 'Kulu moddin', salary: 450000};
// console.log(x, y, z, c)
const [a, b, ...r] = [12, 32, 56, 45, 98];
// console.log(a,b,r)