const http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'Text/plain' });
    res.end("Hello...");
}).listen(3000);
console.log("Hosting Node at 3000 Port Number");