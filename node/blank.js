var fs = require('fs'); 

// fs.writeFile('chill.txt','Kill Bill 2',function(err){
//     if(err){
//         return console.log(err);
//     }

//     ;
// });

// data= text file
// fs.readFile('chill.txt','utf8', function(err,data){
//     if(err){
//         return console.log(err);
//     }

// //     console.log(data);


// var content = data.split(',');
// // for (let i = 0; i < content.length;i++){
// //     console.log(content[i]);
// // }
// content.forEach(function(element){
// console.log(element);
// })

// })


var data= process.argv[2];

fs.appendFile('movies.txt',data, function(err){
    if(err){
        return console.log(err);
    }
    console.log("something was added");
})

