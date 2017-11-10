const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //bodyparser + json + urlencoder
const morgan = require('morgan'); // logger
const db = require('./configs/database');
//Configuration
app.set('port', 4001);
app.listen(app.get('port'));
app.use(bodyParser());
app.use(morgan());

app.all('*', function(req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});


//Routes
var routes = {};
routes.employee = require('./routes/employee.controller.js');


//Routing URLs
app.get('/employee', routes.employee.getEmployee);
app.get('/salary', routes.employee.getEmployeeSalary);


console.log('[INFO] Your project API started on port ' + app.get('port'));