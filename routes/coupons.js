var data = require('../data.json');

exports.couponslist = function(req, res) { 
	res.render('couponjson', data);
}