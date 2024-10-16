const UserPost = require('../../models/UserPost.model')
const jwt = require('jsonwebtoken')

async function UpdatePost(req,res) {
    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        img: req.body.img || "" // In case you want to update an image
    };
    const userPost = await UserPost.findByIdAndUpdate(
        {_id:req.params.id}, // The ID of the post you want to update
        updatedPost,   // The new data to update
        { new: true }  // Option to return the updated document
    );
    
    if (userPost) {
        res.status(200).json({ message: 'Post updated successfully', post: userPost });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
    
}

module.exports = UpdatePost