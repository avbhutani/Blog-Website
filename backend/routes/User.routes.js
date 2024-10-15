const express = require('express')
const UserRoutes = express()
const jwt = require('jsonwebtoken')
const CreatePostController = require('../controllers/userControllers/CreatePost.controller')
const GetAllPosts = require('../controllers/userControllers/GetAllPosts.controller')
const GetUserPost = require('../controllers/userControllers/GetUserPost.controller')
const GetPostById = require('../controllers/userControllers/GetPostById')
const DeletePostById = require('../controllers/userControllers/DeletePostById.controller')
const UpdatePost = require('../controllers/userControllers/UpdatePost.controller')
// Create a new Post
UserRoutes.post('/user/createNewPost',CreatePostController)

UserRoutes.get('/allposts',GetAllPosts)

UserRoutes.get('/user/posts',GetUserPost)

UserRoutes.get('/users/posts/:id',GetPostById)

UserRoutes.post('/user/posts/delete/:id',DeletePostById)

UserRoutes.post('/user/posts/update/:id',UpdatePost)

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