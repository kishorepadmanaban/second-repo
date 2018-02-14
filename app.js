var express = require('express');
var todoController = require('./controllers/todoController.js');



var app = express();

//template engine
app.set('view engine','ejs');

//static route
app.use(express.static('./public'));

//access controller
todoController(app);

app.listen(3000);
console.log('You are listening to port 3000');