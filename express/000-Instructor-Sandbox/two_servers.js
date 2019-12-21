var http = require('http');

const PORT = 7000;

const PORT2 = 7500;

const handleRequestOne = (request,response) => {
    console.log("Port 1 working")
    response.end("It works! Hello World! We are hitting: " + request.url);
};

const handleRequestTwo = (request,response) => {
    console.log('Port 2 working')
    response.end("It works! Hello World! We are hitting: " + request.url);
}
const serverOne = http.createServer(handleRequestOne);
const serverTwo = http.createServer(handleRequestTwo)

serverOne.listen(PORT, () => {
    console.log('Server is listening on port: http://localhost:' + PORT);
    
});
serverTwo.listen(PORT2, () => {
    console.log('Server is listening on port: http://localhost:' + PORT2)
})
