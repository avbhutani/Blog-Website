const User = require("../models/User.model")
const bcrypt = require('bcrypt')

async function LoginUser(req,res) {
    const {username,password} = req.body

    try {
        const user = await User.findOne({username})

        if(user) {
        console.log(username + ' ' + password + user.password)
        if(bcrypt.compareSync(password,user.password))  
            res.sendStatus(200)
        else 
            res.sendStatus(401)
        }
        else {
            console.log(`Invalid user query.`)
            res.sendStatus(404)
        }
    }
    catch(e) {
        console.log(`Error in saving User`,e)
    }
}

module.exports = LoginUser