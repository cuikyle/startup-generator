const express = require('express')
const path = require('path')
const app = express();

const cors = require('cors') //to get past CORS issues
app.use(cors());



app.set('port', process.env.PORT || 3000); //sets port to 3000

app.get('/', function(req, res) {	//sets up the html page (was mainly used for testing)
	const page = path.join(__dirname + '/index.html');
	res.sendFile(page);
});

app.get('/thisforthat', function(req, res) {		//sets up the API accessible at localhost:3000/thisforthat, mirrors the format of the original API
	const allthedata = path.join(__dirname + '/thisforthat.json');
	const json = require('./thisforthat.json');

	const thisVal = json.this[Math.floor(Math.random() * 100)];
	const thatVal = json.that[Math.floor(Math.random() * 83)];

	res.send({this:thisVal,that:thatVal});
})

app.listen(app.get('port'), () => {
	console.log('Listening on port', app.get('port'));
});


