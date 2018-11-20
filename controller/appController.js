const express = require('express')

// Start Route Method
let routemethod = (req,res) => {
    console.log(req.params);
    res.send(req.params);
}// End blog route

// Start Query Method
let querymethod = (req,res) => {
    console.log(req.query);
    res.send(req.query);
}// End Query route

// Start body Method
let bodymethod = (req,res) => {
    console.log(req.body);
    res.send(req.body);
}// End Body route

module.exports = {
    routemethod: routemethod,
    querymethod: querymethod,
    bodymethod: bodymethod
}