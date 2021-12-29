const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();

const companies = require('./api/routes/company');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTION, GET, PUT, PATCH, DELETE, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use(express.json());


app.use(companies);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({message: 'Something went wrong!!'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})