const users =[{id: 1, name: 'Abul', job: 'doctore'}];
console.log(users[0].name);


const data = {
    count : 5000,
    data : [
        {id: 1, name: 'Babul', job: 'leader'},
        {id: 2, name: 'Dabul', job: 'chamca'},
    ]
}
const job = data.data[0].job;
console.log(job);


const user = {
    id: 5001,
    name: 'Thomas Alba',
    address: {
    street: {
        first : '35/a kochukhat lane',
        second : 'third flor',
        third: 'right side'
    },
        postOffice: 'chandir Chor',
        city: 'Dhaka'
    }
}
const place = user.address.street?.second;
console.log(place)