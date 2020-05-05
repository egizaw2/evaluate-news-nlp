const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
//console.log(`Your API key is ${process.env.API_KEY}`);
var path = require("path")
const express = require("express")
const mockAPIResponse = require("./mockAPI.js")
var aylien = require("aylien_textapi")
const cors = require('cors');

const textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
	});

const app = express()
app.use(cors())
app.use(express.static("dist"))

//console.log(__dirname);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
	 res.sendFile('dist/index.html')
	//res.sendFile(path.resolve("src/client/views/index.html"));
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
	console.log("Example app listening on port 8082!");
});

app.get('/test', function (req, res) {
	res.send(mockAPIResponse);
})

//POST 
app.post('/analysis', (req, res) => {
textapi.sentiment({ url: req.body.url
		}, (error, result) =>{
			if (error) {
				console.log('error')
				res.send();
				return;
			}
		
	console.log ('success') 
		res.send(result);
	})
	});

 module.exports = app;
