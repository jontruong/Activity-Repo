var fs = require('fs');

const action = process.argv[2];
const value = process.argv[3];

function total(amount){
    //read the file
    fs.readFile('bank.txt','utf8',(err,data)=> {
        if(err){
            return console.log(err);
        }
        data = data.split(', ');
        let totalAmount = 0;

        data.forEach(number => {
            totalAmount += parseFloat(number);
        });
        console.log(totalAmount.toFixed(2));
    })
}


function deposit(amount){
    fs.appendFile('bank.txt', `,$(value)`, (err)=>{
        if(err){
            return console.log(err);
        }
        console.log(`You deposited $$(value)`)
    })
}


function withdrawal(amount){
    fs.appendFile('bank.txt', ", -$(value)", (err)=>{
        if(err){
            return console.log(err);
        }
        console.log(`You withdrew $$(value)`)
    })
}
;

switch(action){
    case 'total':
        total();
        break;
    case 'deposit':
        deposit();
        break;
    case 'withdrawal':
        withdrawal();
        break;
    default:
        total();
        break;

}