const User = require('../models/User.model')
const bcrypt = require('bcrypt')


async function LoginUser(req, res) {
    try {
            const {username,password} = req.body
            const user = await User.findOne({username})
            const isMatch = bcrypt.compareSync(password,user.password)
            if(isMatch)
            return res.send({message:'Logging in...'})
        
        // return res.send({message:'Wrong Password! Try Again!',status:400})
        return res.send({
            password:null,
            message:'Wrong Password! Try Again!'
        })
    }
    catch(error) {

        res.send({message:'User Not Found! Kindly Register!',error:error.message,status:500})
    }
}






module.exports = LoginUser