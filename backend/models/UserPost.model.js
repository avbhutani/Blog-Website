// title, author, img, content, comments

const mongoose = require('mongoose')

const UserPostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    }, 
    author: {
        type:String,
        required:true
    },
    img:{
        type:String,
    },
    content:{
        type:String,
        required:true
    }
},{timeStamps:true})


const UserPost = mongoose.model('UserPost',UserPostSchema)
module.exports = UserPost