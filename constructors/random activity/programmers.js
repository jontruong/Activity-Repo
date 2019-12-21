const Programmer = function(name,job,age,language){
    this.name= name;
    this.job=job;
    this.age=age;
    this.language=language;
}

// this.printInfo = ()=>{
//     console.log(`"Name:"${this.name}
//     "Job:"${this.job}
//     "Age:"${this.age}
//     "Language:"${this.language}`)
// }


Programmer.prototype.PrintStats= function(){
    console.log(`${this.name}
    ${this.job}
    ${this.age}
    ${this.language}`);
};

// const joe = new Programmer("Jen","programmer",23,"english");
const joe = new Programmer("Jen","programmer",23,"english");
joe.PrintStats();
// joe.printInfo();

// class Coder{
//     constructor(name,age,job,language){
//         this.name=name;
//         this.job=job;
//         this.age=age;
//         this.language=language;
//     }
// }
// printInfo(){
//     console.log(`Name:${this.name}\nAge:${this.age}\nJob:${this.job}\nLanguage:${this.language}`)
// }
// const Julie = new Coder('Julie', 99);
// Julie.printInfo();