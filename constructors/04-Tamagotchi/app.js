var DigitalPal = function(){
this.hungry=false;
this.sleepy=false;
this.bored=true;
this.age=0;
}

DigitalPal.prototype.feed = function(){
    if(this.hungry){
        console.log("That was yummy!");
        this.hungry = true;
        this.sleepy = false;
        return;
    }
    console.log("No thanks! I'm full.");
}

DigitalPal.prototype.sleep = function(){
    if(this.sleepy){
        console.log("zzzzzz");
        this.sleepy = false;
        this.bored = true;
        this.increaseAge();
        return;
    }
    console.log("No way, I am not tired!")
}

DigitalPal.prototype.play = function(){
    if(this.bored){
        console.log("yay! Let's play!");
        this.bored = false;
        this.hungry = true;
        return;
    }
    console.log("Not right now. Later?");
}

DigitalPal.prototype.increaseAge = function(){
    this.age++;
    console.log("Happy Birthday to me! I am "+this.age+" old!");
}

//* Create a variable named "dog" that is set to a new DigitalPal before adding the following unique properties/methods to it...

// * outside - Initially set to false

// * bark() - Prints out "Woof! Woof!" when run

// * goOutside() - If outside is false, prints "Yay! I love the outdoors!", sets outside to true, and runs bark(). If outside is true, prints "We're already outside though..."

// * goInside() - If outside is true, prints "Do we have to? Fine..." and sets outside to false. If outside is false, prints "I'm already inside..."
// //

var dog = new DigitalPal();

dog.outside = false
dog.bark = function(){
    console.log("Woof woof")
}

dog.goOutside = function(){
    if(!this.outside){
        console.log("Yay i love the outdoors");
        this.outside = true;
        dog.bark();
        return;
    }
    console.log("We;re already outside")
}

dog.goInside = function(){
    if(this.outside){
        console.log("Do we have to?")
        this.outside = false;
    return;   
 }
}










// * Make a second variable named "cat" that is set to a new DigitalPal and add the following methods to it:

//   * houseCondition - Initially set to 100... But not for long...

//   * meow() - prints out "Meow! Meow!" when run

//   * destroyFurniture() - Decreases houseCondition by 10 and prints "MUAHAHAHAHA! TAKE THAT FURNITURE!" to the screen. Also sets bored to false and sleepy to true. If houseCondition is equal to 0, then this should not run anymore.

//   * buyNewFurniture() - Increases houseCondition by 50 and prints "Are you sure about that?" to the screen.
var cats = new DigitalPal();

cats.houseCondition = 100;

cats.meow = function(){
    console.log('meow meow!');
}

cats.destroyFurniture = function(){
    if(this.houseCondition <= 0){
        return;
    } else {
        this.houseCondition -= 10;
        console.log("*Evil laughs+");
        this.bored = false;
        this.sleepy = true;
    }
}
cats.buyFurniture = function(){
    this.houseCondition += 50;
    console.log("Are you sure aboyt")
}