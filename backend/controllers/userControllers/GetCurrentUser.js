const jwt = require('jsonwebtoken')

async function getCurrentUser(req,res) {
    try {
        const token = req.cookies.token
        const decodedToken = jwt.decode(token)

        res.status(200).send(decodedToken.username)
        
    }
    catch(error) {
        res.status(400).send(null)
    }
}

module.exports = getCurrentUser