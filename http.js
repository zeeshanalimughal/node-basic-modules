const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {
    if(request.url==='/'){
        fs.readFile('index.html','utf-8',function(err,data){
            if(err) {
                console.log("ERROR:")
            }  
            response.end(data)
        })
    }

    
    if(request.url==='/about'){
        fs.readFile('about.html','utf-8',function(err,data){
            if(err) {
                console.log("ERROR:")
            }  
            response.end(data)
        })
    }


    // console.log(response)
    response.writeHead(200,{
        'Content-Type': 'text/html',
    })

   
    // response.end()  
}).listen(2000);

console.log("SERVER IS LISING ON http://localhost:2000");

