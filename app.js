var fs = require('fs');
//var math = require('mathjs');
const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('webpages/', function (req, res) {
  res.render('mainpage', {});
});

//const server = http.createServer((req, res) => {
//  res.statusCode = 200;
//  res.setHeader('Content-Type', 'text/plain');
//  
//    app.use(bodyParser.urlencoded({extended:true}))
//    
//
//        res.end("not displaying info");
//
////    
//});
//
//
//
//
//
//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
//});
//
//console.log('Server working')

app.listen(3000)