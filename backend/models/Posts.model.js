// userId, [post]
const mongoose = require('mongoose')
const Post = require('./Post.model')

const PostsSchema = new mongoose.model({
    userId: {
        type:String,
        required:true
    },
    Posts:[Post]
})

const Posts = mongoose.model('Posts',PostsSchema)

module.exports = Posts