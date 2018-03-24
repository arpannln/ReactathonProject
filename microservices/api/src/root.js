var fetchAction =  require('node-fetch');

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
})
.catch(function(error) {
	console.log('Request Failed:' + error);
});
