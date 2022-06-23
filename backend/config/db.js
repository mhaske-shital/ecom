const mongoose=require("mongoose")
require("colors")

const db=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MONGO CONNECTED");
        
    } catch (error) {
            console.log(`something went wrong ${error}`);
    }
}

module.exports=db