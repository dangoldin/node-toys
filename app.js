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

app.get('/fact', function(req, res) {
	var n = parseInt(req.param('n'),10) || 1,
            a = parseInt(req.param('a'),10) || 1;
	if (n === 1) {
            res.status(200).send('Factorial: ' + a);
        } else {
            var url = "/fact?n=" + (n-1) + "&a=" + (a*n);
            res.redirect(url);
        }
    });

app.get('/isPrime', function(req, res) {
	var n = parseInt(req.param('n'),10),
	    f = parseInt(req.param('f'),10) || 2;
	if (f > Math.sqrt(n)) {
	    res.status(200).send('Prime');
	} else if (n % f === 0) {
	    res.status(200).send('Composite');
	} else {
	    res.redirect('/isPrime?n=' + n + '&f=' + (f+1));
	}
    });

app.listen(port);
console.log('Server started on port ' + port);
