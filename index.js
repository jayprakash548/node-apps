const express = require('express');
const config = require('./config/configApp'); //Import Config File
const fs =require('fs');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const globalErrorMiddleware = require('./middlewares/appErrorHandler');

//Application level Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cookieParser());
app.use(globalErrorMiddleware.errorHandler);
//Middleware End

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

// Router Level Middleware
app.use(globalErrorMiddleware.notFoundHandler);
// End Router Level Middleware

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
