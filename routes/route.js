const express = require('express')
// Import Controller
const appController = require('../controller/appController');
const appConfig = require('../config/configApp');



const setRouter = (app) => {
    const baseUrl = appConfig.apiVersion+'/blogs';
    console.log(baseUrl); //api/v1/blogs
    app.get(baseUrl+'/all', appController.getAllBlog);
    app.get('/blog/route/:firstname/:lastname', appController.routemethod);
    app.get('/blog/query', appController.querymethod);
    app.post('/blog/body', appController.bodymethod);
}
module.exports = {
    setRouter: setRouter
}