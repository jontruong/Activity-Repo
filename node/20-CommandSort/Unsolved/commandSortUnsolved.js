// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var input = process.argv.slice(2);

// const numbers = [1,2,3,4,5];

// const doubled = numbers.map(number => number * 2)
// console.log("Numbers arr", numbers);
// console.log("doubled", doubled);

const numValues = input.map(element => parseFloat(element));

console.log(numValues.sort((a,b)=> a-b));
console.log(numValues);