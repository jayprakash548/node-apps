const express = require('express');
const config = require('./config/configApp'); //Import Config File
const fs =require('fs');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const globalErrorMiddleware = require('./middlewares/appErrorHandler');
const routeLoggerMiddleware = require('./middlewares/routeLogger')

//Third-party middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cookieParser());
//End Third-party middleware

//Error-handling middleware
app.use(globalErrorMiddleware.errorHandler);
app.use(routeLoggerMiddleware.logIp)
//End Error-handling middleware

// Import Model
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function(file){
    if(~file.indexOf('.js')) require(modelsPath+ '/' + file)     
}) // End Bootstrap Model

// Import Route
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function(file){
    if(~file.indexOf('.js')){      
        console.log('Includes JS File')  ;
        console.log(routesPath+'/'+ file);
        const route = require(routesPath +'/' + file);             
        route.setRouter(app);
    }
})

// //Error-handling middleware
app.use(globalErrorMiddleware.notFoundHandler);
//Error-handling middleware

// Mongo Connection Start
app.listen(config.port, () => {
    console.log('Port Running at 3000');
    let db = mongoose.connect(config.db.uri, { useNewUrlParser: true })
}) // End of Mongo Connection

mongoose.connection.on('error',function(err){
    console.log('database connection error')
    console.log(err)
})
mongoose.connection.on('open', function(err) {
    if (err) {
        console.log('database connection error')
        console.log(err)
    }else{
        console.log('database connected succesffully')
    }
})
