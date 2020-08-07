'use strict';

var fs=require('fs');

var rs=fs.createReadStream('sample.txt','utf-8');

rs.on('data',function(chunk){
    console.log('Data:')
    console.log(chunk)
})

rs.on('end',function(){
    console.log('end');
})

rs.on('error',function(err){
    console.log('error:'+err);
})


var ws1=fs.createWriteStream('output1.txt','utf-8');

ws1.write('使用Stream写入文本数据……\n');
ws1.write('End');
ws1.end();

var ws2=fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据……\n','utf-8'));
ws2.write(new Buffer('End','utf-8'));
ws2.end();
