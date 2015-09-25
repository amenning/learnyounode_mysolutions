var http = require('http');
var bl = require('bl');

var content = ["" ,"" ,"" ];
var callbackCount = 0;

function logData(index, stuff){
        content[index]=stuff;
	callbackCount++;
	if(callbackCount===3){
		printData();
	}
};

http.get(process.argv[2],function(response){
	response.pipe(bl(function(err, data){
		return logData(0,data.toString());
	}));
});

http.get(process.argv[3],function(response){
        response.pipe(bl(function(err, data){
                return logData(1,data.toString());
        }));    
}); 

http.get(process.argv[4],function(response){
       response.pipe(bl(function(err, data){
		return logData(2,data.toString());
	})); 
});

function printData(){
	for(var x=0;x<content.length;x++){
		console.log(content[x]);
	}
};
