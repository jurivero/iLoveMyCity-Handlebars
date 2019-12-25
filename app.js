var express=require('express');
var exphbs=require('express-handlebars');
var app=express();

var routes=require('./routes/route.js');
app.set('view engine','handlebars');
app.use(express.static(__dirname +'/public'));
app.engine('handlebars', exphbs({defaultLayouts:'main'}));
app.get('/',routes.home);
app.get('/:city',routes.city);


var server_port= process.env.PORT || 8080;
var server=app.listen(server_port, ()=>{
console.log("Catch the action at https://localhost:"+server_port);
})