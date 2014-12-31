var express  = require('express'),
    port = 4000;

var app = express();

app.get('/sum', function(req, res) {
	var n = parseInt(req.param('n'),10) || 0,
	    a = parseInt(req.param('a'),10) || 0;
	if (n === 0) {
	    res.status(200).send('Sum: ' + a);
	} else {
	    var url = "/sum?n=" + (n-1) + "&a=" + (a+n);
	    res.redirect(url);
	}
    });

app.listen(port);
console.log('Server started on port ' + port);