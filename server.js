let http = require("http");
let fs = require("fs");
var server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is Home Page\n");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is About Page\n");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is Contact Page");
  } else if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error writing to file");
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("File written successfully");
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});
let ports = 3000;
server.listen(ports, () => {
  console.log(`server is listening port ${ports}!!!`);
});
