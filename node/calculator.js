const argumentList = process.argv;
const addThese = argumentList.slice(2,argumentList.length);

let sum= 0;
let solution = addThese.forEach((value) => {
    sum += Number(value);
    return sum;
});

console.log("the sum:"+ sum)
