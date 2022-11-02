const http   = require('http');
const bwipjs = require('bwip-js');
const fs = require('fs');

//start barcode server

http.createServer(function(req, res) {
    if (req.url.indexOf('/?bcid=') != 0) {
        res.writeHead(404, { 'Content-Type':'text/plain' });
        res.end('BWIPJS: Unknown request format.', 'utf8');
    } else {
        bwipjs.request(req, res); 
    }

}).listen(3030, () => {
      console.log("Barcode server running on port 3030");
 });
 	
	const file = fs.createWriteStream("newfile.jpg");
	const request = http.get("http://localhost:3030/?bcid=code128&text=hello", function(response) {
	   response.pipe(file);

	   // after download completed close filestream
	   file.on("finish", () => {
		   file.close();
		   console.log("Download Completed");
	   });
	   
	 });
	
	
	
	
	
	