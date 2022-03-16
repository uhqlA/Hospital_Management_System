const jwt = require('jsonwebtoken')

exports.verifyToken = (req, res, next)=>{
    const token = req.cookie.access_token;

    if(!token){
        res.sendStatus(403);
    }

    //verifyToken
    jwt.verify(token, 'secretKeyGoesHere', (err)=>{
        if(err){
            res.send(err)
        }
        next()
    })
}