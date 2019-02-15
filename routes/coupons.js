var data = require('../data.json');
var data_cat = require('../data_cat.json');
var data_expire = require('../data_expire.json');

exports.couponslist = function(req, res) { 
	res.render('couponjson', data);
}
exports.couponscata = function(req, res) { 
	res.render('coupon_cat', data_cat);
}
exports.couponsexp= function(req, res) { 
	res.render('coupon_expire', data_expire);
}