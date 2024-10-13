const express = require('express')
const MainAppRoutes = express()
const Auth = require('../middlewares/Auth.middleware')

MainAppRoutes.post('/',Auth,function(req,res) {
    res.status(200).send({message:'Port working fine'})
})

module.exports = MainAppRoutes