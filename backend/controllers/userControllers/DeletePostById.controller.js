const UserPost = require('../../models/UserPost.model')
const jwt = require('jsonwebtoken')


// Delete the user's post
async function DeletePostById(req,res) {
    const postId = req.params.id 
    const token = req.cookies.token
    const decodedToken = jwt.decode(token)
    const user = decodedToken.username
    try{
        const confirmUser = await UserPost.findOne({_id:postId})
        if(confirmUser.author === user) {
        const user = await UserPost.deleteOne({_id:postId})
        res.status(200).send({message:'Post Deleted Successfully.'})}
        else throw new error;
    } catch(error) {
        res.status(500).send({error:error})
    }
}

module.exports = DeletePostById