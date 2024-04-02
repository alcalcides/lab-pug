const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("app listening on port ", port);
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.set('views', './views');
app.set('view engine', 'pug');

app.get("/pug", (req, res) => {
  res.render('index')
})