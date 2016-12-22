var express = require('express');
var app = express();
 
app.get('/', function (request, response) {
  response.send('Sveikas pasauli!');
});
 
app.listen(80, function () {
  console.log('Pavyzdinė svetainė klausosi per 80 portą!');
});