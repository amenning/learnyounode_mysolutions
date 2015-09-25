var fs = require('fs');
var path = require('path');

module.exports = function (directoryName, extensionFilter, callback) {
	var error = null;
	var content = new Array();
	fs.readdir(directoryName, function read(err, list) {
    		if (err) {
        		return callback(err);
    		}else{
    			for(var i=0;i<list.length;i++){
				if(path.extname(list[i])==="."+extensionFilter){
        	     			content[i]=list[i];
        			}
    			}
			return callback(err, content);
		}
	});
}

