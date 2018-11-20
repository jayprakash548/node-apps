const express = require('express')
// Import Controller
const appController = require('../controller/appController');

const setRouter = (app) => {
    app.get('/blog/route/:firstname/:lastname', appController.routemethod);
    app.get('/blog/query', appController.querymethod);
    app.post('/blog/body', appController.bodymethod);
}
module.exports = {
    setRouter: setRouter
}