const express = require('express')
const mongoose = require('mongoose')
const shortId =  require('short-id')

const BlogModel = mongoose.model('blogApp')

const getAllBlog = (req, res) =>{
    BlogModel.find()
    .select('-__v -_id')
    .lean()
    .exec((err, result) =>{
        if(err){
            console.log(err);
            res.send(err);
        }else if(result==undefined || result == null || result == ''){
            console.log('No Blog Found')
            res.send("No Blog Found")
        }else{
            res.send(result)
        }
    })
}
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
    getAllBlog: getAllBlog,
    routemethod: routemethod,
    querymethod: querymethod,
    bodymethod: bodymethod
}