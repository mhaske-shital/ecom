const user=require('../model/user-model')
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
exports.login=async(req,res)=>{
    try {

        const {email,password}=req.body
        const userData=await user.findOne({email}) 

        if(!userData){
            return res.status(400).json({
                success:false,
                message:"email not found"
            })
        }

        const verify=await bcrypt.compare(password,userData.password)
        if(!verify){
            return res.status(400).json({
                success:false,
                message:"password does not match"
            })
        }
        const token=await jwt.sign({userId:userData._id},process.env.JWT_SECRET_KEY)


        res.json({
            success:true,
            message:"user found",
            result:userData,
             token:token
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:"email not found"+error
        })
    }
}


// exports.createUser=async(req,res)=>{
//     try {
//         const result=await user.create(req.body)
//         res.json({
//             success:true,
//             message:"user created",
//             result:result
//         })
        
//     } catch (error) {
//         res.json({
//             success:false,
//             message:"Error"+ error,
//             result:null
//         })
        
//     }
// }