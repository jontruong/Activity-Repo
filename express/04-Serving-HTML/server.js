// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server


// Create a function for handling the requests and responses coming into our server
const  handleRequest = (req, res) => {
  var path = req.url;

  switch (path) {

    case "/index":
      return fs.readFile(__dirname + "/index.html", function(err,data){
        if(err) throw err;
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(data);
      });
  
    case "/favoritefoods":
      return fs.readFile(__dirname + "/food.html", function(err,data){
        if(err) throw err;
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(data);
      });
    
    case "/favoritemovies":
      return fs.readFile(__dirname + "/favoriteMovies.html", function(err,data){
        if(err) throw err;
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(data);
      });

    case "/favoriteCss":
      return fs.readFile(__dirname + "/favoriteCss.html", function(err,data){
        if(err) throw err;
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(data);
      });
  
    default:
      return fs.readFile(__dirname + "/404.html", function(err,data){
        if(err) throw err;
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(data);
    });

  // Here we use the fs package to read our index.html file
  
}};

var server = http.createServer(handleRequest);
// Starts our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
