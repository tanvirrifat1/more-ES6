class TeamMember {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log( `${this.name} thank you for your feedback`)
    }
}


class Instructor extends TeamMember{
    designation = 'web course Intructor';
    team = 'web team';
    constructor(name, location){
       super(name, location)
    }

    startSuppoutSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`please create quiz for module ${module}`)
    }
}


class Developer extends TeamMember{
    designation = 'job placement commando';
    team = 'job placement';
    tech;

    constructor(name, location){
        super(name, location)
        this.tech = this.tech;
    }

    provideResume(feature){
        console.log(`please develop the feature ${feature}`)
    }
    prepareStudent(version){
        console.log(`please release the version ${version}`)
    }
}

class Jobplacement extends TeamMember{
    designation = 'job placement commando';
    team = 'job placement';
    tech;
    region;
    constructor(name, location, region){
        super(name, location)
        this.region = region;
        
    }

    provideResume(feature){
        console.log(`please develop the feature ${feature}`)
    }
    prepareStudent(version){
        console.log(`please release the version ${version}`)
    }
}

const alia = new Developer('alia bhatt', 'dhaka', 'react');
console.log(alia);
alia.provideFeedback();

const abul = new Jobplacement('abul','kolkata', 'india');
console.log(abul)

const tabul = new Instructor('tabul','mumbai', 'india');
console.log(tabul)