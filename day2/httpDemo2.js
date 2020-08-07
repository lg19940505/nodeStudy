'use strict';

var 
  fs=require('fs'),
  url=require('url'),
  path=require('path'),
  http=require('http');

  var root=path.resolve(process.argv[2]||'.');

  console.log('Static root dir:'+root);

  var server=http.createServer(function(req,res){
      var pathname=url.parse(req.url).pathname;
      var filepath=path.join(root,pathname);
      console.log(filepath);
      fs.stat(filepath,function(err,stats){
           if(!err&&stats.isFile()){
               console.log('200'+req.url);
               res.writeHead(200);
               fs.createReadStream(filepath).pipe(res);
           }else{
            console.log('404 ' + req.url);
            // 发送404响应:
            res.writeHead(404);
            res.end('404 Not Found');
           }
      })
  })

  server.listen(8087);

