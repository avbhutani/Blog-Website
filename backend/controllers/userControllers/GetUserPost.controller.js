const posts = require('../../models/Posts.model')
const jwt = require('jsonwebtoken')

async function getUserPost(req,res) {
    const token = req.cookies.token
    console.log(token)
    res.send(token)
    const decodedToken = jwt.decode(token)
    const userId = decodedToken.id
    // // console.log(userId)
    try{
        const userPosts = await posts.findOne({userId}).populate('Posts')
        console.log('Point marked')
        console.log(userPosts)
        res.status(200)}
        catch(error) {
            console.log(error)
        }
}

module.exports = getUserPost