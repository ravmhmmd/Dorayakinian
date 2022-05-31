const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

function auth(req, res, next){
    const token = req.header('auth-token')    
    if(!token) return res.status(401).json({message:'token tidak ada'})

    try{
        const verify = jwt.verify(token, process.env.TOKEN_RAHASIA)
        req.body.user = verify
        next()
    }catch(error){
        return res.status(400).json({message:'token tidak valid'})
    }

}
module.exports = auth