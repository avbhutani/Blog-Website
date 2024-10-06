const User = require("../models/User.model")
const bcrypt = require('bcrypt')

async function LoginUser(req,res) {
    const {username,password} = req.body

    
    const user = User.findOne({username})
    .then(()=> {
        if(!bcrypt.compareSync(password,user.password)) {
            res.sendStatus(404)
        }
        console.log('Login Successful.')
        res.sendStatus(200)
    })
    .catch((error)=> {
        console.log('Cannot find user. Redirect to Register Page.')
        console.log(error)
        res.sendStatus(404)
    })
}

module.exports = LoginUser