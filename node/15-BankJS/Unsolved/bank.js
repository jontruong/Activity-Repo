var fs = require("fs");

var action = process.argv[2];

var value = process.argv[3];

switch(action){
  case "total":
    total();
    break;
  case "deposit":
    deposit();
    break;
  case "withdraw":
    withdraw();
    break;
  case "lotto":
    lotto();
    break;
}

function total(){
  
  fs.readFile("bank.txt", "utf8", function(err, data){
    var fileData = data.split(', ');
    var total = fileData.reduce(function(acc,val){
      var number = parseFloat(val); 
      return acc + number;
    }, 0);
    console.log(total.toFixed(2));
  });
}


function deposit(){
  fs.appendFile("bank.txt", "utf8", function(err,data){



  });
}

function withdraw(){
  console.log(value);
}

function lotto(){
  console.log(value);
}