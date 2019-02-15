var data = require('../data.json');

exports.nineinfo = function(req, res) { 
	res.render('99ranch','ralph',)//'sprouts','vons',)
}
exports.walinfo = function(req, res) { 
	res.render('walmart','sprouts',)//'sprouts','vons',)
}
exports.vonsinfo = function(req, res) { 
	res.render('vons','costco',)//'sprouts','vons',)
}
exports.cvsinfo = function(req, res) { 
	res.render('cvs','traderjoes',)//'sprouts','vons',)
}
exports.zioninfo = function(req, res) { 
	res.render('zionmarket','albertsons',)//'sprouts','vons',)
}
exports.foodinfo = function(req, res) { 
	res.render('food4less','pavillions',)//'sprouts','vons',)
}
exports.wholeinfo = function(req, res) { 
	res.render('wholefoods','northgate',)//'sprouts','vons',)
}
//,'costco','cvs','traderjoes','zionmarket','albertsons','food4less','pavillions','wholefoods','northgate'
