const express = require('express');
var session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const routes = require('./routes/index');



//settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//middlewares
app.use((req, res, next)=>{
    console.log(`${req.url} -${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
//routes
app.use(routes);

//static files
app.use(express.static(path.join(__dirname,'public')));

//start the server
app.listen(app.get('port'), ()=>{
    console.log('servidor corriendo !!! en puerto :'+app.get('port'));
});