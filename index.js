var express = require("express");
var http =require("http");
var app = express();
var port1 = 8888;
var port2 = 8989;
var bodyParser = require('body-parser');
var input = -8;
var alert = require("alert-node");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/userInterface.html");
});

app.get("/changedInput",(req,res)=>{
	res.write(input.toString());
	res.end();
});

app.post("/changeInput", (req, res) => {
    input = req.body.Mode;
	alert("command changed");
    res.sendFile(__dirname + "/userInterface.html");
});

app.listen(port1, () => {
    console.log("Server listening on port " + port1);
});