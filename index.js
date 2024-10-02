require('dotenv').config()
const express = require('express')
const app = express()
const port =4000

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/hello', function (req, res) {
  res.send('Hello ')
})
app.listen(process.env.port ,()=>{
  console.log(`my name is ketan ${port}`);
})
app.get('/login', function (req, res) {
  res.send('<h1>Please Login the page</h1>')
})
app.get('/chai', function (req, res) {
  res.send('<h2>Chai aur tea<h2> ')
})


