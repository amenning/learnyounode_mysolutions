var fs = require('fs');

var content;
// First I want to read the file
fs.readFile(process.argv[2], 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    //console.log(data.toString());
    content = data.toString().split('\n').length-1;
    console.log(content);
});

//var newLineCount = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;

//console.log(content);
