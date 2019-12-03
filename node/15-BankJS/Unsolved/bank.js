// var fs = require('fs');

// const action = process.argv[2];
// const value = process.argv[3];

// function total(amount){
//     //read the file
//     fs.readFile('bank.txt','utf8',(err,data)=> {
//         if(err){
//             return console.log(err);
//         }
//         data = data.split(', ');
//         let totalAmount = 0;

//         data.forEach(number => {
//             totalAmount += parseFloat(number);
//         });
//         console.log(totalAmount.toFixed(2));
//     })
// }


// function deposit(amount){
//     fs.appendFile('bank.txt', `,$(value)`, (err)=>{
//         if(err){
//             return console.log(err);
//         }
//         console.log(`You deposited $$(value)`)
//     })
// }


// function withdrawal(amount){
//     fs.appendFile('bank.txt', ", -$(value)", (err)=>{
//         if(err){
//             return console.log(err);
//         }
//         console.log(`You withdrew $$(value)`)
//     })
// }
// ;

// switch(action){
//     case 'total':
//         total();
//         break;
//     case 'deposit':
//         deposit();
//         break;
//     case 'withdrawal':
//         withdrawal();
//         break;
//     default:
//         total();
//         break;

// }

const fs = require('fs');
​
const action = process.argv[2];
const value  = process.argv[3];
​
function total() {
  // Read the file
  fs.readFile('bank.txt', 'utf8', (err, data) => {
    if(err) {
      return console.log(err);
    }
    data = data.split(', ');
    
    let totalAmount = 0;
​
    data.forEach(number => {
      totalAmount += parseFloat(number);
    });
​
    console.log(totalAmount.toFixed(2));
  });
}
​
​
function deposit(){
  fs.appendFile('bank.txt', `, ${value}`, (err) => {
    if(err) {
      return console.log(err);
    }
​
    console.log(`You deposited $${value}`);
  });
}
​
function withdraw(){
  fs.appendFile('bank.txt', `, -${value}`, (err) => {
    if(err) {
      return console.log(err);
    }
​
    console.log(`You withdrew $${value}`);
  });
}
​
function lotto(){
  fs.appendFile('bank.txt', ', -1', (err) => {
    if(err) {
      return console.log(err);
    }
​
    const randomNum = Math.floor((Math.random() * 10) + 1);
​
    if(randomNum === 1) {
      fs.appendFile('bank.txt', ', 100,000', (err) => {
        if(err) {
          return console.log(err);
        }
      });
​
      console.log('You won $100,000!!!!');
    } else {
      console.log("Sorry loser!!");
    }    
  });
}
​
​
​
switch(action) {
  case 'total':
    total();
    break;
  case 'deposit':
    deposit();
    break;
  case 'lotto':
    lotto();
    break;
  case 'withdraw':
    withdraw();
    break;
  default:
    total();
    break;
}