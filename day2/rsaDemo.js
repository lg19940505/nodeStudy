const fs=require('fs');
const crypto=require('crypto');


function loadKey(file){
    return fs.readFileSync(file,'utf-8');
}

let 
 prvKey=loadKey('./rsa-prv.pem'),
 pubKey=loadKey('./rsa-pub.pem'),
 message='hello world';

 let enc_by_prv=crypto.privateEncrypt(prvKey,Buffer.from(message,'utf-8'));
 console.log('encrypted by private key:'+enc_by_prv.toString('hex'));

 let dec_by_pub=crypto.publicDecrypt(pubKey,enc_by_prv);
 console.log('decrypted by public key: ' + dec_by_pub.toString('utf8'));
