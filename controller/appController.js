const express = require('express')
const mongoose = require('mongoose')
const shortId =  require('short-id')

const BlogModel = mongoose.model('blogApp')
// Function for All Blogs
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
}// End All Blogs

// function to read single Blog by ID
const viewBlogById = (req, res) =>{
    console.log(req.user);
    BlogModel.findOne( {'blogId': req.params.blogId}, (err, result) =>{
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
} //End read single Blog by ID

//function to read blogs by author
const viewByAuthor = (req,res) =>{
    BlogModel.find( {'author': req.params.author}, (err, result) =>{
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
} //End read Blog By Author

//function to read blogs by Category
const viewByCategory = (req,res) =>{
    BlogModel.find( {'category': req.params.category}, (err, result) =>{
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
} //End read Blog By Category

// function to create the blog.
const createBlog = (req, res) => {
    let today = Date.now()
    const blogId = shortId.generate();

    let newBlog = new BlogModel({

        blogId: blogId,
        title: req.body.title,
        description: req.body.description,
        bodyHtml: req.body.blogBody,
        isPublished: true,
        category: req.body.category,
        author: req.body.fullName,
        created: today,
        lastModified: today
    }) // end new blog model

    let tags = (req.body.tags != undefined && req.body.tags != null && req.body.tags != '') ? req.body.tags.split(',') : []
    newBlog.tags = tags

    newBlog.save((err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send(result)

        }
    }) 
}// end new blog save

const editBlog = (req, res) => {

    let options = req.body;
    console.log(options);
    BlogModel.update({ 'blogId': req.params.blogId }, options, { multi: true }).exec((err, result) => {

        if (err) {
            console.log(err)
            res.send(err)
        } else if (result == undefined || result == null || result == '') {
            console.log('No Blog Found')
            res.send("No Blog Found")
        } else {
            res.send(result)

        }
    })
}
/**
 * function to delete the assignment collection.
 */
const deleteBlog = (req, res) => {
    BlogModel.remove({ 'blogId': req.params.blogId }, (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else if (result == undefined || result == null || result == '') {
            console.log('No Blog Found')
            res.send("No Blog Found")
        } else {
            res.send(result)

        }
    })
}
const increaseBlogView = (req, res) => {

    BlogModel.findOne({ 'blogId': req.params.blogId }, (err, result) => {

        if (err) {
            console.log(err)
            res.send(err)
        } else if (result == undefined || result == null || result == '') {
            console.log('No Blog Found')
            res.send("No Blog Found")
        } else {
            
            result.views += 1;
            result.save(function (err, result) {
                if (err) {
                    console.log(err)
                    res.send(err)
                }
                else {
                    console.log("Blog updated successfully")
                    res.send(result)

                }
            });// end result

        }
    })
}



module.exports = {
    getAllBlog: getAllBlog,
    viewBlogById: viewBlogById,
    viewByAuthor: viewByAuthor,
    viewByCategory: viewByCategory,
    createBlog: createBlog, 
    editBlog: editBlog,
    deleteBlog: deleteBlog,
    increaseBlogView: increaseBlogView
}