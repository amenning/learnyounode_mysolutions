var fs = require('fs');
var path = require('path');

var content;
// First I want to read the file

//console.log(process.argv[2]);
//console.log(process.argv[3]);

fs.readdir(process.argv[2], function read(err, list) {
    if (err) {
        throw err;
    }
	
    for(var i=0;i<list.length;i++){
	if(path.extname(list[i])==="."+process.argv[3]){
             console.log(list[i]);
        }
    }
});

//var newLineCount = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;

//console.log(content);
