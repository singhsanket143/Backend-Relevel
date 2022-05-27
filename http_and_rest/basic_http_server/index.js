const http = require('http');
const fs = require('fs/promises');
const port = 3000; // this is the port number on which our application will run

/*
    the request listener function will be executed everytime when we receive any http request
    all we have to do is just register this function
*/
const requestListener = (req, res) => {
    if(req.url == "/home") {
        fs.readFile(__dirname+"/basic.html")
        .then(content => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(content);
        })
    } else if (req.url == "/about") {
        res.end(`{message: 'success'}`);
    } else {
        res.end("some text")
    }
    
    // 
    // 
    // res.end(`<h1>html content</h1>`)
}

// by passing the request listner in the constructor we have registered the request listener for 
// receviing every http request
const server = http.createServer(requestListener); // this function returns a new server object

server.listen(port, () => {
    console.log("Server is running on port", port);
});