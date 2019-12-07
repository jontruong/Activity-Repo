//constructor
const Character= function(name='Npc1',profession='noob',gender='male',age=20,strength=200,hitpoints=1000){
    this.name=name;
    this.profession=profession;
    this.gender=gender;
    this.age=age;
    this.strength=strength;
    this.hitpoints=hitpoints;
};

Character.prototype.printStats=function(){
    console.log(
        `${this.name}
        ${this.profession}
        ${this.gender}
        ${this.age}
        ${this.strength}
        ${this.hitpoints}`
    );
}
Character.prototype.isAlive = function(){
    if(this.hitpoints<0){
        console.log("nope this is dead");
        return false;
    }
    console.log("i'm alive");
    return true;
}

Character.prototype.attack = function(defender){
    defender.hitpoints -= this.strength;
}

Character.prototype.levelUp = function(){
    this.age += 1;
    this.strength += 5;
    this.hitpoints += 25;
}

const apache = new Character();
const amazon = new Character('Amazon', 'Amazon',"female",25,500,2000);

apache.printStats();
apache.isAlive();
amazon.attack(apache);
apache.isAlive();
amazon.levelUp();
amazon.printStats();
amazon.attack(apache);
