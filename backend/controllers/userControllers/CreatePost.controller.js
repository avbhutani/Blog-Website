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
    // console.log(userPost)
    try{
        const newPost = new Posts({userId:userId,posts:[userPost]})
        await newPost.save()
        console.log(newPost)
        res.status(200).send({message:"Post Created"})}
    catch(error) {
        res.status(400).send({error:error})
    }
}


module.exports = CreatePost