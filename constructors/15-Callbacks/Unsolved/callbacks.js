var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
const message = (msg,func) => {
    console.log(msg);
    func();
    
}
// Write a function that runs a function argument if
// its other argument is truthy.
const isTruthy = (bool, func) => {
    if(bool){
        func();
    }
}

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

const crazyFunc = (func, val) => {
    return () => {
        return func(val);
    }
}
// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
fs.writeFile("log.txt", 'some data', function(err){
    if(err) throw err;
})