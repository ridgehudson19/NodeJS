const bwipjs = require('bwip-js');
const fs = require('fs');

var code = '12345';

bwipjs.toBuffer({
        bcid:        'code128',       // Barcode type
        text:        code,    // Text to encode
        scale:       3,               // 3x scaling factor
        height:      10,              // Bar height, in millimeters
        includetext: true,            // Show human-readable text
        textxalign:  'center',        // Always good to set this
    }, function (err, png) {
        if (err) {
            // `err` may be a string or Error object
        } else {
 	    console.log('no errors');
            // `png` is a Buffer
            // png.length           : PNG file length
             png.readUInt32BE(16) //: PNG image width
             png.readUInt32BE(20) //: PNG image height

	var wstream = fs.createWriteStream('myfile.png');
            wstream.write(png);
            //wstream.write('Another line\n');
            wstream.end();
        }
    });