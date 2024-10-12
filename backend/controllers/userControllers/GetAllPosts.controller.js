const userPosts = require('../../models/UserPost.model')

async function GetAllPosts(req,res) {
    const getAllPosts = await userPosts.find()
    console.log(getAllPosts)
    res.send(getAllPosts)
}

module.exports = GetAllPosts