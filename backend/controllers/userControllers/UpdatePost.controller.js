const UserPost = require('../../models/UserPost.model')
const jwt = require('jsonwebtoken')

async function UpdatePost(req,res) {
    const updatedPost = req.body
    const userId= decodedToken.id
 try{
        const userPost = await UserPost.updateOne({_id:req.params.id},
        {$set:{
            title:updatedPost.title,
            author:updatedPost.author,
            content:updatedPost.content,
            img:""
        }},{upsert:true}
    )
    res.status(200).send({message:'Post Updated Successfully!'})
}
    catch(error) {
        res.status(500).send({error:error})
    }
}

module.exports = UpdatePost