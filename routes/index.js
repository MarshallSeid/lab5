// Get all of our friend data - load our JSON database into data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);
};
//$('#').click(listenerFunction)

//$('selector').click(preventDefault());