var express = require("express");
var http =require("http");
var app = express();
var port1 = 8888;
var bodyParser = require('body-parser');
var input = -8;
var alert = require("alert-node");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/style', express.static(__dirname + '/style'));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/userInterface.html");
});

app.get("/changedInput",(req,res)=>{
	res.writeHead(200,{
		'Content-Type' : 'text/plain'
	});
	res.write(""+input);
	res.end();
});

app.post('/changeInput', function(req, res){
	var obj = {};
	obj =req.body;
	input=obj["State"];
	res.send(req.body);
});


app.listen(port1, () => {
    console.log("Server listening on port " + port1);
});