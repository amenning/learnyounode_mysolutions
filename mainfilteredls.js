var filter = require('./filteredls2');
var list =  new Array();

filter(process.argv[2], process.argv[3], function(err, list) {
	if(err){
		throw err;
	}else{
		for(var x=0; x<list.length;x++){
			console.log(list[x]);
		}
	}
});
