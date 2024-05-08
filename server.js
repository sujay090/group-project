const htttp = require("http");
const fs = require("fs");
const home = fs.readFileSync("./index.html", "utf-8");
const homestyle = fs.readFileSync("./style.css", "utf-8");
const homescript = fs.readFileSync("./script2.js", "utf-8");
const services = fs.readFileSync("./services.html", "utf-8");

// this e the ffirst time i create a server in node js  i am so happy to make this
const server = htttp.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/services") {
    return res.end(services);
  }
  if (req.url === "/about") {
    return res.end("<h1>about</h1>");
  }
  if (req.url === "/contact") {
    return res.end("<h1>contact us</h1>");
  } else {
    return res.end("<h1>404 not found</h1>");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
