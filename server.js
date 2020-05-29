const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');


const app = express();

app.use(express.json());

//DB Config
mongoose.connect(
  process.env.dbURI, { useUnifiedTopology: true, useNewUrlParser: true  }, () =>
  console.log('connected to db') )
