// synractic sugar
class Instructor{
    name;
    designation = 'web course Intructor';
    team = 'web team';
    location;

    constructor(name, location){
        this.name = name;
        this.location = location;
    }

    startSuppoutSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}
const ammir = new Instructor('ammir', 'mumbai');
console.log(ammir);
ammir.startSuppoutSession('9.00');
ammir.createQuiz(60);

const solaiman = new Instructor('solaiman khan', 'dhaka');
console.log(solaiman)