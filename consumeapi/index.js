const https = require('https');

var express = require("express");
var app = express();
var fs = require('fs');

let url = "https://api.coinlore.net/api/ticker/?id=45088,257";
let jsonData="";


getData();

app.listen(3030, () => {
 console.log("Server running on port 3030");
});

app.get("/url", (req, res, next) => {
	
getData();
	
	//jsonData = [{"date":"2021-12-31","localName":"New Year's Day","name":"New Year's Day","countryCode":"US","fixed":false,"global":true,"counties":null,"launchYear":1938,"type":"Public"}];
	res.set('Content-Type', 'text/json');
	res.status(200).send(jsonData);
});


function getData(){
	
	https.get(url,(res) => {
	
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.stringify(JSON.parse(body), null, " ");
            // do something with JSON
			jsonData=json;
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});
}