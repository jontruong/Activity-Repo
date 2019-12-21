// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties

// this === 'execturion context'

//1st check to see if the function was invoked with a new keyword if so make the this of that function, be the object that that function returns

//2nd check to see if the function was called with a explicit binding. 
//check if the function was called with 'apply' , 'bind' , 'call'
//What this means that all functions have three different methods. These three functions explicitly change the "this"
//context to the objext that's passed in

//3rd Rule The implicit rule
// Check to see if there's an object to the left of the function call
// If there is, make that object be 'this' context of the function

//4th Rule Default
// if none of the rules above were hit, make 'this' be global

function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
//Rule #1
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");

// calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// if we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dogs, cats);
