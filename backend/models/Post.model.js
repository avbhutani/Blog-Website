// post id, image, [comment]
const mongoose = require('mongoose')
const comment = require('./Comment.model')

const PostSchema = new mongoose.Schema({
    postId:{
        type:String,
        required:true
    },
    img:{
        type:String,
    }
    // comments:[comment]
},{timeStamps:true})


const Post = mongoose.model('Post',PostSchema)
module.exports = Post