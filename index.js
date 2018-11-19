const express = require('express');
const config = require('./config/configApp'); //Import Config File
const fs =require('fs');
const app = express();

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

app.listen(config.port, () => console.log('Port Running at 3000'))