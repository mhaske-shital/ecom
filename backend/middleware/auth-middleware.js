const jwt=require("jsonwebtoken")
exports.authGaurd=async(req,res,next)=>{
    try { 
    const token=req.headers.authorization
    if(!token){
        return res.status(401).json({
            success:false,
            message:"no token provide",
            

        })
    }
    await jwt.verify(token,process.env.JWT_SECRET_KEY)
    next()
        
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"invalid token"
        })
        
    }
}