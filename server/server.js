var express = require('express');
var index = require('./routes/index');
var http = require('http');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('server/public'));


app.use('/', index);

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
})
