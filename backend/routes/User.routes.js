const express = require('express')
const UserRoutes = express()
const jwt = require('jsonwebtoken')
const CreatePostController = require('../controllers/userControllers/CreatePost.controller')

// Create a new Post
UserRoutes.post('/user/createPost',CreatePostController)

UserRoutes.get('/profile',(req,res)=> {
    const token = req.cookies.token
    try {
        jwt.verify(token,process.env.JWT_KEY)
        const user = jwt.decode(token)
        
        console.log(user)
        res.status(200).send({username:user.username,id:user.id})
    }
    catch(error) {
        res.status(401).send({message:'Unauthorized'})
    }
})

module.exports = UserRoutes