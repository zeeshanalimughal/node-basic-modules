const fs = require('fs');

// console.log(fs)

// fs.writeFileSync('test.html','Hello world')
// fs.writeFile('index.html','<h1>Hello World</h1>', function(error){
//     if(error) {
//         console.log(error);
//     }
//     console.log('File created successfully')
// })



// fs.readFile('index.html','utf-8', function (err, data) {
//     let n=false;
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data)
// })

// fs.appendFile('index.html','<p>this is a paragraph</p>', function (err){
//     if (err) {
//         console.log(err);
//     }
//     console.log('file updated successfully');
// })


// fs.stat('index.html',function (err,data){
//     if (err) {
//         console.log(err);
//     }
//     console.log(data)
// })




// console.log(__dirname)

// fs.mkdir('css',function (err){
//     if(err) {
//         console.log('folder already exists');
//         return
//     }
//     console.log('folder created successfully');
// })





// fs.rmdir('css',function (err){
//     if(err) {
//         console.log('folder not found');
//         return;
//     }
//     console.log('folder deleted successfully');
// })


// fs.unlink('decompressed.txt', function (err){
//     if(err){
//         console.log('file not found');
//         return;
//     }
//     console.log('file deleted successfully');
// });




// console.log(__dirname)
// console.log(__filename)
// var i=0;
// let interval = setInterval(function() {
//     if(i==5){
//         clearInterval(interval)
//     }
//     console.log(i++)
// },1000)

// let timeout = setTimeout(function() {
//     console.log("Hello");
// },2000)

// clearTimeout(timeout)