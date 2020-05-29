const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(express.json());

// DB Connection
mongoose
  .connect(
    process.env.dbURI,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected to db")
  )
  .catch((error) => console.log(error));

// Port assignment
const port = process.env.PORT || 5000;

// Server listen
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  res.send("You posted");
});

// Server listen
app.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = app;
