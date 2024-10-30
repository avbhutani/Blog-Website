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
require('dotenv').config()
const multer = require('multer')
const getCurrentUser = require('../controllers/userControllers/GetCurrentUser')
const cloudinary = require('cloudinary').v2


const storage = multer.memoryStorage(); // Use memory storage for cloud uploads
const upload = multer({ storage });

UserRoutes.post('/user/createNewPost',CreatePostController)

UserRoutes.get('/allposts',GetAllPosts)

UserRoutes.get('/user/posts',GetUserPost)

UserRoutes.get('/users/posts/:id',GetPostById)

UserRoutes.post('/user/posts/delete/:id',DeletePostById)

UserRoutes.post('/user/posts/update/:id',UpdatePost)

UserRoutes.get('/getCurrentUser',getCurrentUser)

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key:process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET
});

UserRoutes.post('/user/posts/upload/image', upload.single('file'), async (req, res) => {
    console.log('Check here');
    
    try {
        // Upload to Cloudinary using the file buffer
        const uploadResult = await cloudinary.uploader.upload_stream({ resource_type: 'image',  // Specify that this is an image
            transformation: { 
                width: 300,  // Set desired width
                height: 300,  // Set desired height
                crop: 'fill'  // Crop to fill the specified dimensions
            }  }, (error, result) => {
            if (error) {
                console.log('Cloudinary error: ', error);
                return res.status(500).send('Upload failed.');
            }
            res.status(200).send(result.secure_url);
        });
        
        // Use the file buffer in the upload stream
        if (req.file && req.file.buffer) {
            const bufferStream = require('stream').Readable.from(req.file.buffer);
            bufferStream.pipe(uploadResult);
        } else {
            return res.status(400).send('No file uploaded.');
        }

    } catch (error) {
        console.log('Error: ', error);
        res.status(500).send('Server error.');
    }
});

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