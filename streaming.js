const fs = require('fs');


// var writeStream = fs.createWriteStream('input.txt')

// writeStream.write("Updated Data")

// writeStream.on("error", function (err){
//     console.log(err)
// })





// var readStream = fs.createReadStream('input.txt')

// var data = ''

// readStream.on('data', function (chunks){
//     data+=chunks;
// })

// readStream.on('end', function () {
//     console.log(data)
// })

// readStream.on('error', function(err) {
//     console.error(err)
// })




// var readStream = fs.createReadStream("input.txt")

// var writeStream = fs.createWriteStream("output.txt")

// readStream.pipe(writeStream)


var zlib = require("zlib")

// fs.createReadStream('input.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('output.txt.gz'))

fs.createReadStream('output.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('decompressed.txt'))
