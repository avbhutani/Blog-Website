const userPosts = require('../../models/UserPost.model')

async function GetAllPosts(req,res) {
    const getAllPosts = await userPosts.find()
    res.send(getAllPosts)
}

module.exports = GetAllPosts