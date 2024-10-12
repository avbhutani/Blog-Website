// comment
const mongoose = require('mongoose')
const CommentSchema = new mongoose.Schema({
    postId:{
        type:String,
        required:true
    },
    text: {
        type:String,
        required:true
    },
    likes: {
        type:Number,
        default:0
    }
},{timeStamps:true})

const Comment = mongoose.model('Comment',CommentSchema)

module.exports = Comment