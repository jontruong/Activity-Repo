var dog = {
    raining: true,
    noise:"Woof!",
    makeNoise: function(){
        console.log(noise);
    }
};

var cats = {
    raining: false,
    noise:"Meow!",
    makeNoise: function(){
        console.log(noise);
    }
};
dog.makeNoise();
cats.makeNoise();