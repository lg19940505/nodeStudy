const controller=require('./controller');

const bodyParser = require('koa-bodyparser');

var koa=require('koa');

var app=new koa();

app.use(bodyParser());
app.use(controller());

app.listen(3000)

