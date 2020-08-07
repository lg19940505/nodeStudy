const crypto=require('crypto');

const hash=crypto.createHash('md5');

hash.update('hello,worlds')

console.log(hash.digest('hex'))