const express = require('express')
// Import Controller
const appController = require('../controller/appController');
const appConfig = require('../config/configApp');
const appMiddleware = require('../middlewares/appMiddlewares');


const setRouter = (app) => {
    const baseUrl = appConfig.apiVersion+'/blogs';
    console.log(baseUrl); //api/v1/blogs
    app.get(baseUrl+'/all', appController.getAllBlog);
    app.get(baseUrl+'/view/:blogId', appMiddleware.appMiddleware, appController.viewBlogById);
    app.get(baseUrl+'/view/by/author/:author', appController.viewByAuthor);
    app.get(baseUrl+'/view/by/category/:category',appController.viewByCategory);   
    app.post(baseUrl+'/create',appController.createBlog);
    app.post(baseUrl+'/:blogId/delete',appController.deleteBlog);
    app.put(baseUrl+'/:blogId/edit',appController.editBlog);    
    app.get(baseUrl+'/:blogId/count/view',appController.increaseBlogView);   
}
module.exports = {
    setRouter: setRouter
}