var fs = require('fs');
const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
    
    
    
    
//    app.use(bodyParser.urlencoded({ extended: true })); 
//
//app.post('/example', (req, res) => {
//  res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
//   
//    res.end(`Full name is:${req.body.fname} ${req.body.lname}.`);
//});
//
    res.end('Testing Server: Success');
//    
});





server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

console.log('Server working')

