const UserPost = require('../../models/UserPost.model')
const Posts = require('../../models/Posts.model')
const jwt = require('jsonwebtoken')

async function CreatePost(req,res) {
    const token = req.cookies.token 
    const user = jwt.decode(token)
    const userId = user.id
    const reqBody = req.body
    const t = reqBody.title
    const c = reqBody.content
    const i = reqBody.img
    const userPost = new UserPost({title:t,author:user.username,img:i,content:c})
    try{
        const savedUserPost = await userPost.save()
        let userPosts = await Posts.findOne({ userId: userId });

        if (!userPosts) {

            // If no Posts document exists, create one
            userPosts = new Posts({ userId: userId, Posts: [savedUserPost._id] })
        } else {

            // If Posts document exists, push the new post's ObjectId
            userPosts.Posts.push(savedUserPost._id)
        }

        await userPosts.save();  // Save the updated or new Posts document

        res.status(200).send({message:"Post Created"})}
    catch(error) {
        console.log(error)
    }
}


module.exports = CreatePost