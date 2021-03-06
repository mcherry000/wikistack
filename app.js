const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const layout = require('./views/layout');
const { db } = require('./models');



app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.send(layout(''));
});

app.get("/", (req, res, next) => {
  res.send(

  db.authenticate().
  then(() => {
  console.log('connected to the database');
})
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log('whatever');
});

// const PORT = 1337;

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });
