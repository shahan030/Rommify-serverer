const jwt = require('jsonwebtoken')

const jwtMiddlewere=(req,res,next)=>{
    console.log(' inside jwt middlewere ');
    const token = req.headers['authorization'].split(' ')[1]
    if(token){
        try {
            const jwtResponse = jwt.verify(token,process.env.JWTPASSWORD)
            req.userId=jwtResponse.userId
            next()
        } catch (err) {
            res.status(401).json("authorization failed",err)
        }
    }else{
        res.status(404).json("authorization failed")
    }
    
}
module.exports=jwtMiddlewere