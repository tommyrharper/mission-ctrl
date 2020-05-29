const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(express.json());

//DB Config
mongoose.connect(
  process.env.dbURI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
)
.catch(error => console.log(error))

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.post('/', (req, res) => {
  res.send("You posted")
})

app.listen(port, () => console.log(`Server listening on port ${port}`))

module.exports = app