const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("app listening on port ", port);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

const pug = require('pug');
const pugTemplate = pug.compile('p hello pug');
const htmlFromPug = pugTemplate({})
console.log(htmlFromPug);

app.get("/pug", (req, res) => {
  res.send(htmlFromPug)
})