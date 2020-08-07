'use strict';

var http=require('http');

var server=http.createServer(function(req,res){
     console.log(req.method+':'+req.url);
     res.writeHead(200,{'Content-Type':'text/html'});
     res.end('<h1>hello world</h1>');
})

server.listen(8066);

console.log('Server is running at http://127.0.0.1:8066/');