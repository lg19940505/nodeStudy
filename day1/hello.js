'use strict';


var s='hello';

function greet(name){
    console.log(s+','+name+'!');
}
function change(obj){
    s=obj;
}

module.exports={greet,change};