var express  = require('express'),
    port = 4000;

var app = express();

app.get('/', function(req, res) {
	var x = req.param('x'),
	    y = parseInt(req.param('y'),10) || 0,
	    arr = x.split(',');
	if (x && arr.length) {
	    var a = arr.pop();
	    y += parseInt(a,10);
	    var url = '/?x=' + arr.join(',') + '&y=' + y;
	    console.log('URL: ' + url);
	    res.redirect(302, url);
	} else {
	    res.status(200).send('Sum: ' + y);
	}
    });

app.listen(port);
console.log('Server started on port ' + port);