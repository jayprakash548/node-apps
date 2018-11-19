const express = require('express')
// Import Controller
const appController = require('../controller/appController');

const setRouter = (app) => {
    app.get('/hello', appController.helloWorld);
    app.get('/print', appController.printmsg)
}
module.exports = {
    setRouter: setRouter
}