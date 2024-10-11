const jwt = require("jsonwebtoken");
require("dotenv").config();

export default function TokenValidation(req, res) {
  const token = req.cookies.token
    if(!token) {
        res.status(401).send({message:'Unauthorized'})
    }

    try {
        jwt.verify(token,process.env.JWT_KEY)
        res.status(200).send({message:'Token Validated'})
    }
    catch(error) {
        res.send(401).send({message:'Unauthorized'})
    }
}
