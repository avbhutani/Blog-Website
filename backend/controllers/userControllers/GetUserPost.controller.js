const posts = require('../../models/Posts.model')
const jwt = require('jsonwebtoken')

async function getUserPost(req,res) {
    const token = req.cookies.token
    console.log(token)
    const decodedToken = jwt.decode(token)
    const userId = decodedToken.id
    try{
        const userPosts = await posts.findOne({userId}).populate('Posts')
        res.send(userPosts.Posts)
    }
    catch(error) {
        console.log(error)
    }
}

module.exports = getUserPost