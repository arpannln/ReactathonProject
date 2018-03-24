var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var morgan = require('morgan');
var bodyParser = require('body-parser');
require('request-debug')(request);

var root = require('./root');
var server = require('http').Server(app);

router.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var fetchAction =  require('node-fetch');

app.get('/', (req, res) => {
  var url = "https://data.acridly34.hasura-app.io/v1/query";

  var requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json"
      }
  };

  var body = {
      "type": "select",
      "args": {
          "table": "topic",
          "columns": [
              "*"
          ]
      }
  };

  requestOptions.body = JSON.stringify(body);

  fetchAction(url, requestOptions)
  .then(function(response) {
    return response.json();
  })
  .then(function(result) {
  	console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
  })
  .catch(function(error) {
  	console.log('Request Failed:' + error);
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
