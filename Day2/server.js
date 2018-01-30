const http = require("http")
const port = 8080

const requestHandler = (req,res) => {
  console.log(req.url)
  if(req.url === '/hello')
    res.end("Hello");
  if(req.url === '/world')
    res.end("World")
};


const server = http.createServer(requestHandler)

server.listen(port , (err) => {
  if(err)
    return console.log("ERROR : "  + err);

  console.log(`SUCCESS : Server running on port ${port}`);

});
