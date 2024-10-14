const Post = require('../../models/UserPost.model')

async function GetPostById(req,res) {
    try {
        console.log(req.params)
        const post = await Post.findById(req.params.id); // Find the post by ID
        if (!post) {
            return res.status(404).send({ message: 'Post not found' });
        }
        res.send(post); // Send the post data as JSON
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).send({ message: 'Server error' });
    }
}

module.exports = GetPostById