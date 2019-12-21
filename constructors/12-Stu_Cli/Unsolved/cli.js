// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var search = process.argv[2];
var term = process.argv.slice(3).join(' ');
function Search(){
   if(!search){
    search = "show";
    term = "Friends";
   }
    if(search === "actor"){
        console.log("We are searching for" + search);
    }
    else if(search === "show"){
        console.log("We are searching for" + search)
    }
};
Search();
