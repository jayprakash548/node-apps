const mongoose = require('mongoose')
const schema = mongoose.Schema;

const blogSchema = new schema(
    {
        blogId: {
            type: String,
            unique: true
        },   
        title: {
            type: String,
            default: '' 
        },
        description: {
            type: String,
            default: ''
        },
        bodyHtml: {
            type: String,
            default: ''
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: false
        },
        category: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        tags: [],
        created: {
            type: Date,
            default: Date.now
        },
        lastModified: {
            type: Date,
            default: Date.now
        }
    }
)
mongoose.model('blogApp', blogSchema)