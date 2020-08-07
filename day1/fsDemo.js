'use strict';
var fs=require("fs");
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
fs.readFile('z.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var text = data.toString('utf-8');
        console.log(text);
    }
});
