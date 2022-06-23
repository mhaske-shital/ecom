const env =require("dotenv")
env.config({path:"../config/.env"})
const db =require("../config/db")

// data files

const users =require("./data/users")
const products=require("./data/products")

// models 
 const userModel=require("../model/user-model")
 const productModel=require("../model/product-model")

const insertdata=async()=>{
    try {
        db()
       await userModel.deleteMany()
       await productModel.deleteMany()

        const result=await userModel.create(users)
        console.log(result)
        const admin =result[0]._id
        const sampleData =products.map(item =>{
            return{...item,userId:admin}
        })
         const data =await productModel.create(sampleData)
        console.log("DATA INSERTED  SUCCESSFULLY!!!");
        console.log(data);
        process.exit()
   

// 
    } catch (error) {
        console.log(`ERRO: ${error}`);
        process.exit()
    }
}

const deletetdata=async()=>{
    try {
        db()
    //    await userModel.deleteMany()

        const result=await userModel.deleteMany()
        console.log("data destroyed");
        process.exit()
   

    } catch (error) {
        console.log(`ERRO: ${error}`);
        process.exit()
    }
}


 if(process.argv[2]=== "-c"){
     console.log("data inserted");
    insertdata()
 }else if(process.argv[2]==="-d"){
     console.log("data destroyed");
    deletetdata()
 }else{
    //  console.log("invalid oprstion");
 }