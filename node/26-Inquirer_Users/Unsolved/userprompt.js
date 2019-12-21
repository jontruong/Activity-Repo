// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require('inquirer');

inquirer
.prompt([
{
    type:"input",
    message: "What's your favorite color?",
    name:"color",
},
{
    type:"password",
    message:"Set your password",
    name:"password",
},
{
    type:"list",
    message:"What's your favorite cuisine?",
    choices:["Japanese","Italian","Chinese","Korean","French","American","Mexican"],
    name:"cuisine",
},
{
    type:"checkbox",
    message:"Select a drink:",
    choices:["sprite","coke","water","milk tea", "gatorade"],
    name:"drinks",
},
{
    type:"confirm",
    message:"Is this your final answer?",
    name:"confirm",
    default:true,
},

])
.then(function(inquirerResponse){
    if(inquirerResponse.confirm){
        console.log("\nWelcome " + inquirerResponse.color);
        console.log("Your favorite cuisine is " + inquirerResponse.cuisine + " and you like to drink " + inquirerResponse.drinks);
    }
    else{
        console.log("Good luck" + inquirerResponse.color);
    }

})