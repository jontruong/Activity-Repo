var dog = {
    raining: true,
    noise:"Woof!",
    makeNoise: function(){
        if(this.raining){
        console.log(this.noise);
        }
    }
};

var cats = {
    raining: false,
    noise:"Meow!",
    makeNoise: function(){
        if(this.raining){
        console.log(this.noise);
        }
    }
};
dog.makeNoise();
cats.makeNoise();

const massHysteria = function(cat,dog){
    if(dog.raining && cat.raining){
        console.log("Dogs and cats living together! Mass Hysteria!")
    }
}