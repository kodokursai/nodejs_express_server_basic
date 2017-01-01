var express = require('express');
var app = express();
 
app.get('/person', function (request, response) {
  var name = request.query.name;
  response.send('Sveikas, ' + name + '!');
});

app.get('/', function (req, res) {
  response.send('Sveikas pasauli!');
});
 
app.listen(80, function () {
  console.log('Pavyzdinė svetainė klausosi per 80 portą!');
});