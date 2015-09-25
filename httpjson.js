var http = require('http');
var fs = require ('fs');
var map = require ('through2-map');
var url = require ('url');

var jsonTime = "/api/parsetime";
var jsonUnixTime = "/api/unixtime";
var requestParse;
var date;

var server = http.createServer(function (request, response){
	requestParse = url.parse(request.url.toString(), true);
	date= new Date(requestParse.query.iso);
	if(requestParse.pathname===jsonTime){
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.write(JSON.stringify({hour : date.getHours(), minute : date.getMinutes(), second : date.getSeconds()}));
		response.end();
	}else if(requestParse.pathname===jsonUnixTime){
		response.writeHead(200, {'Content-Type': 'application/json'});
		response.write(JSON.stringify({unixtime : date.getTime()}));
		response.end();
	}
});
server.listen(process.argv[2]);

