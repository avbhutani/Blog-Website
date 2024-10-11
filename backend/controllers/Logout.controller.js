

async function LogoutUser(req,res) {
    console.log(req.cookies.token)
    res.send({message:'Logged Out User.'})
}

module.exports = LogoutUser