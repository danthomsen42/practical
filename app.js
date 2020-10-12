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
  
    app.use(bodyParser.urlencoded({extended:true}))
    
    app.post('/',(req,res)=>{

let fName = req.body.firstName; // here you can get the value of from the textbox
console.log(fName);
})
    
//    app.use(bodyParser.urlencoded({ extended: true })); 
//
//app.post('/example', (req, res) => {
//  res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
//   
//    res.end(`Full name is:${req.body.fname} ${req.body.lname}.`);
//});
//
    if (fName !== NULL){
    res.end(fName);    
    }
    else{
        res.end("not displaying info");
    }
//    
});





server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

console.log('Server working')

