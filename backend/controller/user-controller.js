const user=require("../model/user-model")
// const address=("../model/user-address-model.js")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const userAddressModel = require("../model/user-address-model")
exports.createUser=async(req,res)=>{
    try {
        const salt=await bcrypt.genSalt(10);
        const pass=await bcrypt.hash(req.body.password,salt)
        const result=await user.create({
            name:req.body.name,
            email:req.body.email,
            password:pass
        })
        res.json({
            success:true,
            message:"user created",
            result:result
        })
    
    } catch (error) {
        res.json({
            success:false,
            message:"Error"+ error,
            result:null
        })
        
    }
}


exports.deleteUser=async(req,res)=>{
    try {
        const result=await user.deleteMany()
        res.json({
            success:true,
            message:"user deleted",
            result:result
        })
    } catch (error) {
        req.json({
            success:false,
            message:"error"+error,
            result:null
        })
        
    }

}

exports.userProfile=async(req,res)=>{
    try {
         
        const {userId}=await jwt.verify(req.headers.authorization,process.env.JWT_SECRET_KEY)
        console.log(userId);
        const result=await user.findById(userId);
        const addr=await userAddressModel.findOne({
            userId:result._id
        })
        res.status(200).json({
            success:true,
            message:"all users",
            result:{
                id:result._id,
                name:result.name,
                email:result.email,
                isAdmin:result.isAdmin,
                address:addr,
            }
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:"Error"+error,
            result:null
        })
    }
}
exports.userAdress = async (req, res) => {
    try {
        const { houseNo, street, pincode, city } = req.body;
        const token = req.headers.authorization
        const { userId } = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        const result = await userAddressModel.create({
            houseNo,
            street,
            pincode,
            city,
            userId,

        })
        res.json({
            success: true,
            message: "address added",
            result,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            messsage: "data"+error,

        })
    }
}


 