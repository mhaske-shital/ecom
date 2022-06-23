const product=require("../model/product-model")
const jwt=require("jsonwebtoken")
exports.getAllProduct=async(req,res)=>{
    try {
        const result=await product.find()
        res.json({
            success:true,
            count:result.length,
            message:"get all product",
            result:result
        })
        
    } catch (error) {
        res.json({
            success:true,             
            message:"error"+error,
            result:null
        })
        
    }
}
exports.addProduct=async(req,res)=>{
    try {
        const token=req.headers.authorization;
        const {userId}=await jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.body.userId=userId;
        const result=await product.create(req.body)
        res.json({
            success:true,
            count:result.length,
            message:"add product",
            result:result
        })
        
    } catch (error) {
        res.json({
            success:true,             
            message:"error"+error,
            result:null
        })
        
    }
}
exports.getSingleProduct=async(req,res)=>{
    try {
        const result=await product.findOne({_id:req.params.id})
        res.json({
            success:true,
            count:result.length,
            message:"get single product",
            result:result
        })
        
    } catch (error) {
        res.json({
            success:true,             
            message:"error"+error,
            result:null
        })
        
    }
}
exports.updateProduct=async(req,res)=>{
    try {
        const result=await product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({
            success:true,
            count:result.length,
            message:" single product updated",
            result:result
        })
        
    } catch (error) {
        res.json({
            success:true,             
            message:"error"+error,
            result:null
        })
        
    }
}
exports.deleteProduct=async(req,res)=>{
    try {
        const result=await product.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            count:result.length,
            message:" single product deleted",
            result:result
        })
        
    } catch (error) {
        res.json({
            success:true,             
            message:"error"+error,
            result:null
        })
        
    }
}