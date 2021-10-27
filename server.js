

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
    const url = req.url;
    if (url === '/index.js') {

      res.writeHead(200, { 'Content-Type': 'text/js' }); 
      fs.createReadStream(__dirname + "/index.js", "utf8").pipe(res);

    } else{
      res.writeHead(200, { 'Content-Type': 'text/html' }); 
      fs.createReadStream(__dirname + "/index.html", "utf8").pipe(res);
      }
  })

server.listen(3000, "127.0.0.1");
console.log("Listening to port 3000");
