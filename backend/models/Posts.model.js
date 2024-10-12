// userId, [post]
const mongoose = require('mongoose')
const Post = require('./UserPost.model')

const PostsSchema = new mongoose.Schema({
    userId: {
        type:String,
        required:true
    },
    Posts:[{type:mongoose.Schema.Types.ObjectId,ref:'UserPost'}]
})

const Posts = mongoose.model('Posts',PostsSchema)

module.exports = Posts