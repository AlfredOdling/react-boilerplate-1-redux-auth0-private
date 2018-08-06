var jwt = require('express-jwt');
var jwtDecode = require('jwt-decode');
var config = require('./config');


var decode = function(req){
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		  return req.headers.authorization.split(' ')[1];
	} else if (req.query && req.query.token) {
		return req.query.token;
	}
	return null;

}

module.exports = {
	jwtChecking: jwt({secret: config.jwt.secret, audience: config.jwt.audience}),
	decode: function(req){
		var resp = jwtDecode(decode(req))
		return resp;
	}
}
