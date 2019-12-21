const mysql = require('mysql');
var inquirer = require('inquirer');
const connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'great_bay_db'
});
connection.connect(err => {
    if (err) throw err
    console.log(('connected as id ' + connection.threadId + "\n"))
})

function Bidder(name, bid, item){
this.name=name;
this.bid=bid;
this.item=item;
}

Bidder.prototype.printInfo = function(){
    console.log("Name: " + this.name + "\nBid: " + this.bid + "\nItem: " + this.item );
}
function start(){
    inquirer.prompt([
        {
            name: "name",
            type: "list",
            message:" Do you want to post an item or make a bid?",
            choices:["Post an item?"," Make a bid?"]

        }
    ]).then(function(answers){
        var newBidder = new Bidder(answers.name, answers.bid, answers.item);
        newBidder.printInfo();
    })
}
start();